export default function PrintNumber(props) {
    const choseNumber = props.choseNumber;
    if(choseNumber === 0){
        return(<b style={{color: "lightgreen"}}>{ choseNumber }</b>);
    }else if(choseNumber % 2 === 0){
        return(<b style={{color: "rgb(236, 53, 53)"}}>{ choseNumber }</b>);
    }else{
        return(<b style={{color: "rgb(44, 44, 44)"}}>{ choseNumber }</b>);
    }
}