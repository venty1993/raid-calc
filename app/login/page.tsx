import { redirect } from 'next/navigation'

export default async function Login({
    params,
    searchParams,
}: {
    params: {slug: string}
    searchParams: { [key:string]:string|string[]|undefined}
}) {
    const { code } = searchParams
    
    if(code) {
        fetch(`http://localhost:3000/api/login?code=${code}`).then(e=>e.json()).then(res=>{
           console.log(res.isNewcomer) 
            if(res.isNewcomer){
                console.log("뉴비임");
                
                // redirect('./setting')
            }else {
                console.log("뉴비 아님");

                // redirect('./schedule')
            }
        })

        
    }

    return (
        <div>
            {}
        </div>
        )
}