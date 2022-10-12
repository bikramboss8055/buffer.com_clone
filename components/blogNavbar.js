function Navbar(){
    return `  <div class="logo">
 
    <a id="shiva" href="../index.html"><h1>Buffer</h1></a>
    <img src="https://buffer.com/resources/content/images/2021/02/buffer-logo.svg" alt="Buffer Resources">
   
    
    <span>|</span>
    <a href="../code/blog_homepage.html">BLOG</a>
</div>
<div class="logo">
    <ul id="ul">
        <li><a href="../shivaHTML/guides.html">Guides</a></li>
        <li><a href="../shivaHTML/trends.html">Trends</a></li>
        <li><a href="../shivaHTML/news.html">News</a></li>
        <li><a href="../shivaHTML/work.html">Work Culture</a></li>
        <li><button id='show_category' onmouseout='hide_category()' onmouseover='show_category()'>All categories <span><i id='arrow' class="fa-solid fa-angle-down"></i></span></button>
        </li>
    </ul>
    <div id="dropdown"></div>
</div>
<div class="logo">
    <a href=""><i style="font-size:2rem;" class="fa-solid fa-magnifying-glass"></i></a>
    <button id="start"><a href="../mridul HTml/pricing.html">Get started for free </a></button>
</div>`
}

export default Navbar;