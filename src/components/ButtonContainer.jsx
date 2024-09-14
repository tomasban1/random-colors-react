/* eslint-disable react/prop-types */


export function ButtonContainer(props){
    const {
        btnNames, 
        generateColor1, 
        generateColor2, 
        generateColor3, 
        generateColor4, 
        currColor1, 
        currColor2, 
        currColor3, 
        currColor4, 
        background} = props;

    return (
        <>
            <div className="bd-example m-0 border-0 gap-3 d-flex">  
                {btnNames.map((name, index) => 
                <>
                    <div className="d-flex flex-column">
                        <button onClick={generateColor1} key={index} type="button" className="btn btn-primary" 
                        style={{backgroundColor:currColor1 === '#000000' ? '' : currColor1}}>{name.name1}</button>
                        <span style={{width: 81}}>Color code: {currColor1}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <button onClick={generateColor2} type="button" key={index} className="btn btn-secondary" 
                        style={{backgroundColor:currColor2 === '#000000' ? '' : currColor2}}>{name.name2}</button>
                        <span style={{width: 81}}>Color code: {currColor2}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <button onClick={generateColor3} type="button" key={index} className="btn btn-success" 
                        
                        style={{backgroundColor:currColor3 === '#000000' ? '' : currColor3}}>{name.name3}</button>
                        <span style={{width: 81}}>Color code: {currColor3}</span>
                    </div>
                    <div className="d-flex flex-column">
                        <button onClick={generateColor4} type="button" key={index} className="btn btn-danger" 
                        style={{backgroundColor:currColor4 === '#000000' ? '' : currColor4}}>{name.name4}</button>
                        <span style={{width: 81}}>Color code: {currColor4}</span>
                    </div>
                </>
                )}
            </div>
            <div style={{marginTop: 50, width:300}}>
                <h2>Screen background color code: {background}</h2>
            </div>
        </>
        
    );
}