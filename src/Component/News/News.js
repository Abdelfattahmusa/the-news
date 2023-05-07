import React, {Component} from 'react';
import NewSingle from './NewSingle';
class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
        };
    }
    componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c1e86363aa764bf6a71713e5e83a3611';
    
    fetch(url)
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
        this.setState({
            news: data.articles
     
     })
    })
    .catch((error)=>console.log(error));
}

    renderItems(){
        return this.state.news.map((item)=>(
           <NewSingle key={item.url} item={item}/>
        ));
    }
    render(){
        return(
            <div className='row'>
                {this.renderItems()}
            </div>
        );
    }
}
export default News;