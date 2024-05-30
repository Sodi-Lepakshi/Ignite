function showForm(type) {
    document.getElementById('new-user-form').classList.add('hidden');
    document.getElementById('existing-user-form').classList.add('hidden');
    
    if (type === 'new') {
        document.getElementById('new-user-form').classList.remove('hidden');
    } else if (type === 'existing') {
        document.getElementById('existing-user-form').classList.remove('hidden');
    }
}
