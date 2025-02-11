
export function sendLog(msg) {
    'use server';

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ log: msg })
    }

    fetch('/', options)
    .finally(() => {})
}