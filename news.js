//GENERAL NEWS
const newsHeadings = document.querySelectorAll('.news-heading');
const newsImages = document.querySelectorAll('.news-image');
const newsDates = document.querySelectorAll('.news-date');
const newsUrl = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
//NEWS USA
const editorialsHeadings = document.querySelectorAll('.editorial-heading');
const editorialsImages = document.querySelectorAll('.editorial-image');
const editorialsDates = document.querySelectorAll('.editorial-date');
const editorialsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
//LOCAL NEWS
const localHeadings = document.querySelectorAll('.local-heading');
const localImages = document.querySelectorAll('.local-image');
const localDates = document.querySelectorAll('.local-date');
const localUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3ab8892677804ed0bfdd40ef9adae2a0'
//BUSINESS NEWS
const businessHeadings = document.querySelectorAll('.business-heading');
const businessImages = document.querySelectorAll('.business-image');
const businessDates = document.querySelectorAll('.business-date');
const businessUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';
//SPORT NEWS
const sportHeadings = document.querySelectorAll('.sport-heading');
const sportImages = document.querySelectorAll('.sport-image');
const sportDates = document.querySelectorAll('.sport-date');
const sportUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3ab8892677804ed0bfdd40ef9adae2a0';

Promise.all([
    fetch(newsUrl).then(value => value.json()),
    fetch(editorialsUrl).then(value => value.json()),
    fetch(localUrl).then(value => value.json()),
    fetch(businessUrl).then(value => value.json()),
    fetch(sportUrl).then(value => value.json())
    ])
    .then((value) => {
       console.log(value)
      //json response
      //general news
    for(i = 0; i < newsHeadings.length; i++){
        newsHeadings[i].innerHTML = value[0].articles[i].title;
    }
    for(i = 0; i < newsImages.length; i++){
        newsImages[i].src = value[0].articles[i].urlToImage;
    }
    for(i = 0; i < newsDates.length; i++){
        newsDates[i].innerHTML = value[0].articles[i].publishedAt;
    }
    //usa news editorials
    for(i = 0; i < editorialsHeadings.length; i++){
        editorialsHeadings[i].innerHTML = value[1].articles[i].title;
    }
    for(i = 0; i < editorialsImages.length; i++){
        editorialsImages[i].src = value[1].articles[i].urlToImage;
    }
    for(i = 0; i < editorialsDates.length; i++){
        editorialsDates[i].innerHTML = value[1].articles[i].publishedAt;
    }
    //local news
    for(i = 0; i < localHeadings.length; i++){
        localHeadings[i].innerHTML = value[2].articles[i].title;
    }
    for(i = 0; i < localImages.length; i++){
        localImages[i].src = value[2].articles[i].urlToImage;
    }
    for(i = 0; i < localDates.length; i++){
        localDates[i].innerHTML = value[2].articles[i].publishedAt;
    }
    //business news
    for(i = 0; i < businessHeadings.length; i++){
        businessHeadings[i].innerHTML = value[3].articles[i].title;
    }
    for(i = 0; i < businessImages.length; i++){
        businessImages[i].src = value[3].articles[i].urlToImage;
    }
    for(i = 0; i < businessDates.length; i++){
        businessDates[i].innerHTML = value[3].articles[i].publishedAt;
    }
    //sport news
    for(i = 0; i < sportHeadings.length; i++){
        sportHeadings[i].innerHTML = value[4].articles[i].title;
    }
    for(i = 0; i < sportImages.length; i++){
        sportImages[i].src = value[4].articles[i].urlToImage;
    }
    for(i = 0; i < sportDates.length; i++){
        sportDates[i].innerHTML = value[4].articles[i].publishedAt;
    }
    })
    .catch((err) => {
        console.log(err);
    });