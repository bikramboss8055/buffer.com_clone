// let data=[
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/jack-appleby.png',
//         text:'Publication > Flow',
//         heading:'Social Proof: Jack Appleby on Loving your Craft',
//         date:'Aug 18,2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:' 11 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Resources',
//         para:'In this interview, we talk with Jack Appleby about loving your craft, career-proofing yourself, and dealing with negativity on social media.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg',
//         author_name:'Tamilore Oladipo,',
//         desig:'Content Writer @ Buffer'
//     },
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/pexels-george-milton-6953835.jpg',
//         text:'Publication > Flow',
//         heading:'5 Organizations To Support This National Nonprofit Day',
//         date:'Aug 17, 2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:'5 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Flow',
//         para:'Nonprofits are often the backbone of society, providing critical services to communities in need. Here are 5 organizations you can donate to today.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/03/Untitled-design.png',
//         author_name:'Umber Bhatti,',
//         desig:'Content Writer @ Buffer'
//     },
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/thought-catalog-UK78i6vK3sc-unsplash.jpg',
//         text:'Publication > Flow',
//         heading:'Burnout Sent Me to the Hospital— Here are the Early Signs I Look Out for Now',
//         date:'Aug 16, 2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:'6 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Resources',
//         para:'After experiencing burnout-related vision loss, Erika Ferszt became an expert in the body’s response to stress. Now, as a business owner, she watches out for these early warning signs so she can turn her burnout around before it becomes debilitating.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/08/Blog-Guest-Contributors.png',
//         author_name:'Erika Ferszt,',
//         desig:'Founder of Moodally'
//     },
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/alisa-anton-QUT4YG2d7U8-unsplash.jpg',
//         text:'Publication > Flow',
//         heading:'I Thought My Mission Could Carry My Business, But I Needed a Good Product, Too',
//         date:'Aug 10, 2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:'7 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Resources',
//         para:'When Maddy McAllister started her social-impact jewelry company, she thought her mission alone would draw in customers. But she quickly realized they cared more about the quality of the product. Here’s how she turned the business around to have a deeper impact in the long run.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/08/Copy-of-Headshots-on-brand-colors.png',
//         author_name:'Maddy McAllister,',
//         desig:'Co-Founder of Yewo'
//     },
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/alisa-anton-QUT4YG2d7U8-unsplash.jpg',
//         text:'Publication > Flow',
//         heading:'I Thought My Mission Could Carry My Business, But I Needed a Good Product, Too',
//         date:'Aug 10, 2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:'7 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Resources',
//         para:'When Maddy McAllister started her social-impact jewelry company, she thought her mission alone would draw in customers. But she quickly realized they cared more about the quality of the product. Here’s how she turned the business around to have a deeper impact in the long run.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/08/Copy-of-Headshots-on-brand-colors.png',
//         author_name:'Maddy McAllister,',
//         desig:'Co-Founder of Yewo'
//     },
//     {
//         image:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/08/alisa-anton-QUT4YG2d7U8-unsplash.jpg',
//         text:'Publication > Flow',
//         heading:'I Thought My Mission Could Carry My Business, But I Needed a Good Product, Too',
//         date:'Aug 10, 2022',
//         glass:'https://cdn-icons-png.flaticon.com/512/347/347895.png',
//         info:'7 min read',
//         dot:'https://cdn-icons-png.flaticon.com/128/7500/7500224.png',
//         text2:'Resources',
//         para:'When Maddy McAllister started her social-impact jewelry company, she thought her mission alone would draw in customers. But she quickly realized they cared more about the quality of the product. Here’s how she turned the business around to have a deeper impact in the long run.',
//         author_pic:'https://buffer.com/resources/content/images/size/w100/2022/08/Copy-of-Headshots-on-brand-colors.png',
//         author_name:'Maddy McAllister,',
//         desig:'Co-Founder of Yewo'
//     },
// ]



// display(data)

// function display(data){
//     let container= document.getElementById('cont');
//     data.forEach((el) => {
//         let div= document.createElement('div')

//         let image= document.createElement('img')
//         image.src=el.image;

//         let text= document.createElement('p')
//         text.textContent=el.text;

//         let heading= document.createElement('h3')
//         heading.textContent= el.heading;

//         let div2= document.createElement('div')
//         let div3= document.createElement('div')
//         let div4= document.createElement('div')

//         let date= document.createElement('span')
//         date.textContent= el.date;

//         let glass= document.createElement('img')
//         glass.src= el.glass;

//         div3.append(date, glass)

//         let info= document.createElement('p')
//         info.textContent= el.info;

//         let dot= document.createElement('img')
//         dot.src= el.dot;

//         let text2= document.createElement('span')
//         text2.textContent=el.text2;

//         let btn= document.createElement('button')
//         btn.innerHTML=dot,text2;
//         div4.append(info, btn)
//         div2.append(div3,div4)

//         let para= document.createElement('p')
//         para.textContent=el.para;

//         let author_pic= document.createElement('img')
//         author_pic.src= el.author_pic;

//         let author_name= document.createElement('span')
//         author_name.textContent=el.author_name;

//         let desig= document.createElement('span')
//         desig.textContent= el.desig;

//         div.append(image, text, heading, div2, para, author_pic, author_name, desig)
//         container.append(div)
//     });
// }