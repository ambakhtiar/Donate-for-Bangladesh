function toggle(id) {
    ['btn-blog', 'btn-donation', 'btn-history']
        .forEach(i => document.getElementById(i).classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function setHistory(donation, message) {
    const div = document.createElement('div');
    div.classList.add("border", "border-gray-400", "rounded-lg", "p-4");

    const time = new Date();
    const p = document.createElement('p');
    p.innerHTML = time.toString();
    p.innerHTML = `Date & time: ${time.toString()}`;
    div.innerHTML = `
        <h2 class="text-xl font-bold">${donation} Taka is Donated for ${message} Bangladesh</h2>
    `;
    div.appendChild(p);
    // console.log(div);
    document.getElementById('history').appendChild(div);
}

function donate(type, input, balance) {
    let donation = parseInt(document.getElementById(input).value);
    let projectBalance = parseInt(document.getElementById(balance).innerText);
    let availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (donation > 0 && donation <= availableBalance) {
        projectBalance += donation;
        availableBalance -= donation;

        document.getElementById(balance).innerText = projectBalance;
        document.getElementById('available-balance').innerText = availableBalance;

        // my_modal_3.showModal();
        document.getElementById('my_modal_3').showModal();

        if (type === 'quota') setHistory(donation, "Aid for Injured in the Quota Movement,");
        else if (type === "feni") setHistory(donation, "Flood Relief in Feni,");
        else setHistory(donation, "flood Relief in Noakhali,");

    } else {
        alert('Invalid Your Donate')
    }
}