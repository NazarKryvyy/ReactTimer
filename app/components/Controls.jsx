var React = require('react');

var Controls = React.creatClass({
    propTypes: {
        countdownStatu: React.PtopType.string.isRequired
    },
    render: function(){
        var {countdownStatu} = this.props;
        var renderStartStopButton = () =>{
            if(countdownStatu ==='started'){
                return <button className="button secondary">Pause</button>
            }else if(countdownStatu ==='paused'){
                return <button className="button primary">Start</button>
            }
        }
        return(
            <div className='controls'>
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>            
        );
    }

});

module.exports = Controls;