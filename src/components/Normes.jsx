import Dropdown from "./Dropdown";
import '../styles/Normes.css';
function Normes() {
  return (
    <>
    <div className="Full-normes">
    <Dropdown title="Fiabilité" items="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. "/>
    <Dropdown title="Respect" items="La bienveillance fait partie des valeurs de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <Dropdown title="Service" items="La qualité du service est au coeur de notre engagement chez Kasa.Nous veillons à ce que chaque interaction,que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance."/>
    <Dropdown title="Sécurité" items="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. Nous ne laissons aucune place au hasard et nous assurons que les normes de sécurité sont respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
  
    
    </>
  );
}
export default Normes;