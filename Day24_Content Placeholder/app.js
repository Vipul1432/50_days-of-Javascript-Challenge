const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img
  src="vipul.jpg"
  alt="Vipul" />`;
    title.innerHTML = '𝒜 &nbsp 𝒫𝓇💞𝑔𝓇𝒶𝓂𝓂𝑒𝓇🧑‍💻';
    excerpt.innerHTML =
        "𝐈 𝐚𝐦 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐩𝐮𝐫𝐬𝐮𝐢𝐧𝐠 𝐦𝐲 𝐁𝐚𝐜𝐡𝐞𝐥𝐨𝐫'𝐬 𝐢𝐧 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠";
    profile_img.innerHTML =
        '<img src="vipul.jpg" alt="Vipul" />';
    name.innerHTML = 'Vipul Kumar';
    date.innerHTML = 'May 24, 2022';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}