 import React, {Component} from 'react';



class App extends Component{
    state= {displayBio: false};

    toggleDisplayBio=()=>{
    this.setState({displayBio: !this.state.displayBio});
 }

    render() {
        return(
            <div>
                <h1>Hello</h1>
                <p>My name is Lineisha. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>I live in San Antonio, and I love the world of coding.</p>
                        <p>I currently have not found a favorite language, they all flow pretty smoothly.</p>
                        <p>Besides coding, I am an Army vet. I have my Nursing, Massage, and Esthetician Licences all current and active.</p>
                        <p>Helping people is my passion!</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ) : (<div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>)
                }
            </div>
        );
    }
}

export default App;

