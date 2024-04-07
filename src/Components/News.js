import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  article= [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Oregon recriminalises drug possession after overdoses rocket",
      "description": "The state rolled back decriminalisation, which was enacted in 2020 and raised drug possession penalties.",
      "url": "https://www.bbc.co.uk/news/world-us-canada-68716519",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/158C0/production/_133065288_gettyimages-1971231888.jpg",
      "publishedAt": "2024-04-03T07:07:16.4789714Z",
      "content": "Oregon has approved a state law that recriminalises drug possession.\r\nThe law rolls back an experimental policy - the most liberal drug measure in the US - that made possession for personal use a tic… [+2598 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Taylor Swift joins world's richest on billionaire list",
      "description": "The singer is one of a record number of 2,781 billionaires with a collective wealth of $14.2 trillion.",
      "url": "https://www.bbc.co.uk/news/business-68711921",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F50E/production/_132843726_gettyimages-2052929477.jpg",
      "publishedAt": "2024-04-03T06:37:15.3367629Z",
      "content": "Taylor Swift has joined Elon Musk as ranking among the world's wealthiest people, according to a new rich list.\r\nThe American pop star entered the Forbes World's Billionaires List for the first time … [+2849 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Will Truth Social post a financial bailout for Trump?",
      "description": "Trump Media lost nearly $60m last year. So how is it worth billions? We explain the ex-president's windfall.",
      "url": "https://www.bbc.co.uk/news/business-68716628",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7BB2/production/_133066613_whatsubject.jpg",
      "publishedAt": "2024-04-03T04:22:16.5259996Z",
      "content": "The share price of Donald Trump's media company has fallen from last week's high when it officially listed on the Nasdaq stock exchange. \r\nBut it is still worth more than $7bn (£5.6bn) at current pri… [+5312 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Botswana offers to send 20,000 elephants to Germany",
      "description": "Germany wants tougher limits on hunting the animals, but Botswana says it has too many of them.",
      "url": "https://www.bbc.co.uk/news/world-68715164",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D3FA/production/_133066245_gettyimages-1760556586.jpg",
      "publishedAt": "2024-04-03T02:52:14.7600286Z",
      "content": "The president of Botswana has threatened to send 20,000 elephants to Germany in a political dispute.\r\nEarlier this year, Germany's environment ministry suggested there should be stricter limits on im… [+2198 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Ukraine lowers combat call-up age to boost numbers",
      "description": "The move will allow Ukraine to call up more people after facing a reduction in volunteer fighters.",
      "url": "https://www.bbc.co.uk/news/world-europe-68719473",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9D54/production/_133067204_soldiersdepa.jpg",
      "publishedAt": "2024-04-03T02:52:13.7290333Z",
      "content": "Ukrainian President Volodymyr Zelensky has signed into law a bill lowering the military mobilisation age by two years from 27 to 25. \r\nKyiv has faced heavy losses on the battlefield after two years o… [+2052 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Strongest earthquake in 25 years hits Taiwan - seismology centre",
      "description": "The earthquake has set off tsunami warnings in the neighbouring countries of Japan and the Philippines.",
      "url": "https://www.bbc.co.uk/news/world-asia-68719996",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13D7C/production/_133067218_240403taiwanearthquakestill3.jpg",
      "publishedAt": "2024-04-03T02:37:12.431338Z",
      "content": "A 7.4 magnitude earthquake struck off Taiwan's east coast on Wednesday, setting off tsunami warnings on the island and neighbouring countries.\r\nThe epicentre is located about 18km (11mi) south of Tai… [+2037 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "China's ageing population: A demographic crisis is unfolding for Xi",
      "description": "The country is running out of time to build enough of a fund to care for its growing number of elderly.",
      "url": "https://www.bbc.co.uk/news/world-asia-china-68595450",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/056F/production/_133019310_dsc05988.jpg",
      "publishedAt": "2024-04-03T00:22:15.0567927Z",
      "content": "Ask 72-year-old farmer Huanchun Cao about his pension and he reacts with a throaty cackle.\r\nHe sucks on his home-rolled cigarette, narrows his brow and tilts his head - as if the very question is abs… [+10215 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Clothes of French toddler Emile Soleil found near remains in French Alps",
      "description": "Police find a T-shirt, shoes and shorts, three days after some of Emile Soleil's bones were recovered.",
      "url": "https://www.bbc.co.uk/news/world-europe-68716807",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B7E3/production/_133057074_cb8485b9-dc3e-47ce-b4ad-6946349478ea.jpg",
      "publishedAt": "2024-04-02T23:22:19.0569967Z",
      "content": "Three days after remains of a French boy were found along an Alpine path not far from where he disappeared nine months ago, police have found some of the clothes he was wearing close by.\r\nHowever, pr… [+3629 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "International pressure grows over Israeli strike on World Central Kitchen staff",
      "description": "Israel promises an independent inquiry after Western states lose citizens in Monday's attack in Gaza.",
      "url": "https://www.bbc.co.uk/news/world-middle-east-68716499",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15F32/production/_133060998_7cb0a5d8-4972-43e2-9368-3e0f3e10ca69.jpg",
      "publishedAt": "2024-04-02T23:07:19.5873755Z",
      "content": "Media caption, Watch: Video shows World Central Kitchen vehicles destroyed in Gaza air strike\r\nIsrael faces growing international pressure over an air strike which killed seven aid workers for charit… [+4575 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "JK Rowling hate law posts not criminal, police say",
      "description": "Social media comments by JK Rowling challenging Scotland's new hate crime law are not being treated as criminal.",
      "url": "https://www.bbc.co.uk/news/uk-scotland-68712471",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/440D/production/_126312471__123899683_gettyimages-950047366.jpg",
      "publishedAt": "2024-04-02T21:52:15.1189875Z",
      "content": "Social media comments made by JK Rowling challenging Scotland's new hate crime law are not being treated as criminal, Police Scotland has said.\r\nThe Harry Potter author described several transgender … [+5742 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
        article: this.article,
        loading:false,
        page:1
    };
  }
  // async componentDidMount() {
  //   let url =
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=c6fe1bb83b2a4d6396c934f42ecac53a";
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
   
  //   this.setState({article: parsedData.article});
  // }
  // handlePrevClick=async()=>{
  //   this.state = `article: this.article&page=${this.state.page-1}&pageSize=3`;
  //   this.setState({
     
  //   })
  // }
  // handleNextClick=async()=>{
  //    this.setState({
  //     page:this.state.page+1,
  //   })
    
  // }
  render() {
    return (
      <div className="container my-3 mx-2">
        <h1 className="text-center">World-Wide-NewsApp Top Headlines</h1>
        <div className="row">
          {this.state.article.map((element)=>{
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItems
                  title={element.title.slice(0,43)}
                  description={element.description.slice(0,83)}
                  ImageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })} 
        </div>
        <div className="container d-flex justify-content-between">
        <button  type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
