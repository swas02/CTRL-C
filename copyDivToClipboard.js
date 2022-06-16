//Copy function
async function copyDivToClipboard(para) {
    var copyStatus = document.querySelector('#copyStatus');
    try {
        await navigator.clipboard.writeText(para.innerText);
        console.log(para.innerText);
        copyStatus.innerText = 'Copied! 👍'
        setTimeout(() => {
            copyStatus.innerText = 'Click on the code to copy!'
        }, 1000)
    } catch (err) {
        copyStatus.innerText = '⚠️ Failed to Copy!';
        copyStatus.style.background = 'rgba(255,0,0,0.5)';
        setTimeout(() => {
            copyStatus.innerText = 'Click on the code to copy!';
            div.style.background = "rgba(0,255,0,0.5)";
        }, 1000)
    }
}