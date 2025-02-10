import React from 'react'

const Newsitem =(props)=>{
    let {title,description,imgurl,newsurl,author,date,source} =props //destructuring js concept

    return (
      <div className='my-3'>
        <div className="card" style={{marginRight: '4vw'}}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left:'95%'}}>
        {source}</span>
          <img src={imgurl} className="card-img-top news-img" alt="" onError={(e)=>{e.target.src = "https://gizmodo.com/app/uploads/2025/01/MS-0130-stranger-things-finn-wolfhard.jpg"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toISOString()}</small></p>
            <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default Newsitem
