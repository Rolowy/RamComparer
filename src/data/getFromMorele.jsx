import { useQuery } from "react-query"

import './loading.css';

export default function GetData() {  
const getData = async () => {
    const res = await fetch('https://www.morele.net/wyszukiwarka/?q=ram', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
    })
    return res.json();
};

    const {isLoading, isError, data, error } = useQuery('MoreleRam', getData);

    if(error) {console.log('APP offline.'); return (<>APP offline ☠️</>)}
    if(isLoading) return (
    <>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div><br />
        <div>
            Loading data..
        </div>
    </>)

    return (
        <div>
            {data}
        </div>
    )
}