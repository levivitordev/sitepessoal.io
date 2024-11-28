
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });
    document.getElementById('datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();

