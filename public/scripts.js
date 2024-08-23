document.addEventListener('DOMContentLoaded', () => {
    const userId = 1; // Example user ID
    
    // Fetch user data
    fetch(`/api/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            // Update the UI with fetched data
            console.log(data);
            document.getElementById('userData').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error:', error));

    // Post new transaction
    document.getElementById('submitTransaction').addEventListener('click', () => {
        const transactionData = {
            amount: 100,
            category: 'Food'
        };
        
        fetch('/api/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
    });
});
