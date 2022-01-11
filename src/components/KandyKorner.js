import { Locations } from './locations/Locations.js'

const api = "http://localhost:8088"

export const KandyKorner = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <h1>Locations</h1>
           <Locations />
        </>
    )
}