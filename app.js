const form = document.getElementById('joinForm');
const roomInput = document.getElementById('roomId');
const userInput = document.getElementById('username');
const btnText = document.getElementById('btnText');
const spinner = document.getElementById('spinner');
const generateBtn = document.getElementById('generateBtn');
const toast = new bootstrap.Toast(document.getElementById('toast'));

// Auto uppercase room ID
roomInput.oninput = e => e.target.value = e.target.value.toUpperCase();

// Form submit
form.onsubmit = async e => {
    e.preventDefault();
    
    const room = roomInput.value.trim();
    const user = userInput.value.trim();
    
    if (!room || !user) {
        showToast('Please fill in both fields', 'danger');
        return;
    }
    
    // Loading state
    btnText.textContent = 'Joining...';
    spinner.classList.remove('d-none');
    form.querySelector('button[type="submit"]').disabled = true;
    
    // Simulate join (replace with real logic)
    setTimeout(() => {
        showToast(`Successfully joined room ${room} as ${user}!`, 'success');
        
        // Reset
        btnText.textContent = 'Join';
        spinner.classList.add('d-none');
        form.querySelector('button[type="submit"]').disabled = false;
        
        // Redirect to editor (uncomment when ready)
        // window.location.href = `/editor?room=${room}&user=${user}`;
    }, 1500);
};

// Generate room ID
generateBtn.onclick = () => {
    const roomId = Math.random().toString(36).substr(2, 8).toUpperCase();
    roomInput.value = roomId;
    roomInput.style.borderColor = 'var(--green)';
    showToast(`Room ${roomId} generated!`, 'success');
};

// Toast notification
function showToast(message, type = 'success') {
    const toastEl = document.getElementById('toast');
    const toastBody = toastEl.querySelector('.toast-body');
    
    toastBody.textContent = message;
    toastEl.className = `toast bg-${type === 'danger' ? 'danger' : 'success'} text-white`;
    
    toast.show();
}

// Input validation
[roomInput, userInput].forEach(input => {
    input.oninput = () => {
        if (input.value.trim()) {
            input.style.borderColor = 'var(--green)';
        }
    };
});