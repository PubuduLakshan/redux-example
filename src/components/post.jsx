import React, { Component } from 'react'

export default class post extends Component {

    constructor(props){
        super(props);
        this.state ={
            posts : []
        }
    }

    componentWillMount(){

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({posts : json}))
    
    }
    render() {

        const postItems = this.state.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>));

        return (
            <div>
                 <h2>Posts</h2>
                 <hr />
                 <div>{postItems}</div>
            </div>
            )
    }
}
