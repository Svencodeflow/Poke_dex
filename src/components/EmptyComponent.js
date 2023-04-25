import pokemon from '../images/shadowCoder.png'
import unknown from '../images/icons/unknown.png'

const EmptyComponent = () => {
    return (
        <div className='details-container widh'>
            <div className='img-container'>
                <img src={pokemon} alt="" />
            </div>
            <h2>Faristeff</h2>
            <div className='type'>
                <img src={unknown} alt="" />
            </div>
            <div className='info'>
                <div className='stats'>
                    <p>HP: 100</p>
                    <p>Attacke: 5000</p>
                    <p>Verteidigung: 5000</p>
                    <p>Speed: 5000</p>
                </div>
            </div>
            <div className='description'>
                <p className='description-p'>Beschreibung: Faristeff ist ein legendäres Pokémon, das aus der Fusion von Steffen und Farid entstanden ist. Sein Körper ist von einem blendenden Licht umgeben, das von elektrischen Entladungen durchzogen ist. Faristeff beherrscht die ultimative Codierungsfähigkeit und ist in der Lage, komplexe Algorithmen und Programme in Millisekunden zu erstellen und zu manipulieren.

                    Faristeff ist das mächtigste Codierungs-Pokémon und wird von vielen als Gott der Codierung verehrt. Es ist in der Lage, jeden Code zu knacken und jedes Programm zu manipulieren. Faristeff lebt in einer anderen Dimension und kann nicht in der normalen Welt gefangen werden. Nur die auserwählten Trainer, die würdig sind, können es durch ein komplexes Ritual beschwören Faristeff ist ein Symbol für unendliche Macht und Wissen und wird von Entwicklern und Technologie-Enthusiasten auf der ganzen Welt verehrt.</p>
            </div>
        </div>
    );
}

export default EmptyComponent;