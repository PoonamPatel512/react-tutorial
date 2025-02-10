import React, { useEffect, useState } from 'react'
import Newsitem from './3_Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const[articles , setArticles ] = useState([])
  const[ loading, setLoading ] = useState(true)
  const[ page, setPage ] = useState(1)
  const[ totalResults, setTotalResults ] = useState(0)

  document.title = `${props.category} - newsApp`
  
  const handleNews = async ()=>{
    props.handleprogress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=108f6b1ff64043f88d4b227e9fbaa62f&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url)
    props.handleprogress(40)
    let parseddata = await data.json()
    props.handleprogress(80)
    setArticles(parseddata.articles)
    setTotalResults(parseddata.totalResults)
    setLoading(false)
    props.handleprogress(100)
  }
  
  useEffect(()=>{
    handleNews()
  },[])

  // const previouspage =  () =>{
  //   setPage(page - 1)
  // }
 
  // const nextpage = () =>{
  //   setPage(page + 1)
  //   handleNews()
  // }
    
  const fetchMoreData = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=108f6b1ff64043f88d4b227e9fbaa62f&page=${page+1}&pageSize=${props.pagesize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parseddata = await data.json()
    setArticles(articles.concat(parseddata.articles))
    setTotalResults(parseddata.totalResults)
    setLoading(false)
  } 
    
    return (
      <>
      <div className='container my-4'>
        <h2 className='text-center' style={{marginTop:'13vh'}}>NEWSAPP - Top {props.category} headlines</h2>
        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container my-4'>
            {page}
            <div className="row">
            {
              articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
              <Newsitem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,80):" "} imgurl={element.urlToImage?element.urlToImage:  "https://gizmodo.com/app/uploads/2025/01/MS-0130-stranger-things-finn-wolfhard.jpg"} newsurl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} source={element.source.name}/>
              </div>
            })
            } 
           </div>
        </div>
        </InfiniteScroll>
        </div>
    </>
    )
  }

export default News

News.defaultProps ={
  country : 'us',
  pagesize : 8,
  category :'general'
}

News.propTypes={
  country : PropTypes.string,
  pagesize : PropTypes.number,
  category :PropTypes.string
}


// class based Component
// import React, { Component } from 'react'
// import Newsitem from './3_Newsitem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
  
//   static defaultProps ={
//     country : 'us',
//     pagesize : 8,
//     category :'general'
//   }

//   static propTypes={
//     country : PropTypes.string,
//     pagesize : PropTypes.number,
//     category :PropTypes.string
//   }

//   constructor(props){
//     super(props);
//     console.log("constructor from new compo");
//     this.state ={
//       articles: [],
//       loading : true,
//       page : 1
//     }
//     document.title = `${this.props.category} - newsApp`
//   }
//   async handleNews(page = this.state.page){
//     this.props.handleprogress(10)
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=108f6b1ff64043f88d4b227e9fbaa62f&page=${page}&pageSize=${this.props.pagesize}`;
//     this.setState({loading : true})
//     let data = await fetch(url)
//     this.props.handleprogress(40)
//     let parseddata = await data.json()
//     this.props.handleprogress(80)
//     this.setState({articles: parseddata.articles , 
//       totalResults : parseddata.totalResults,
//       loading : false,
//         page,})
//         this.props.handleprogress(100)
//       }
      
//       componentDidMount(){       //1st constructer 2nd render 3rd cdm run thay
//         this.handleNews()
//   }
  
//   previouspage =  () =>{
//       // this.setState({
//       //   page : this.state.page - 1
//       // })
//       this.handleNews(this.state.page - 1)
//   }
  
  
//   nextpage = () =>{
//       // this.setState({
//       //   page : this.state.page + 1
//       // })
//       this.handleNews(this.state.page + 1)
//   }

//   fetchMoreData = async () =>{
//     this.setState({page : this.state.page + 1})
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=108f6b1ff64043f88d4b227e9fbaa62f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
//       this.setState({loading : true})
//       let data = await fetch(url)
//       let parseddata = await data.json()
//       this.setState({
//         articles:this.state.articles.concat(parseddata.articles), 
//         totalResults : parseddata.totalResults,
//         loading : false,
//         })
//       }
  

//   render() {
//     return (
//       <>
      
//       <div className='container my-4'>
//         <h2 className='text-center' style={{marginTop: '1vh'}}>NEWSAPP - Top {this.props.category} headlines</h2>
//         {/* {this.state.loading && <Spinner/>} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className='container my-4'>
//             <div className="row">
//             {
//               this.state.articles.map((element)=>{
//               return <div className='col-md-4' key={element.url}>
//               <Newsitem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,80):" "} imgurl={element.urlToImage?element.urlToImage:  "https://gizmodo.com/app/uploads/2025/01/MS-0130-stranger-things-finn-wolfhard.jpg"} newsurl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt} source={element.source.name}/>
//               </div>
//             })
//             } 
//            </div>
//         </div>
//         </InfiniteScroll>
//         </div>
//       {/* <div className="container d-flex justify-content-between">
//         <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.previouspage}>&larr; Previous</button>
//         <button className="btn btn-light">Page:{this.state.page}</button>
//         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>
//       </div> */}
//     </>
//     )
//   }
// }

// export default News