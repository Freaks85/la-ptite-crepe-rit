import { useState, useEffect } from 'react';
import { Section } from '../components';
import { useScrollReveal, usePageTransition } from '../hooks/useScrollReveal';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sale');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayCategory, setDisplayCategory] = useState('sale');
  const isLoaded = usePageTransition();
  const [logoRef, logoVisible] = useScrollReveal({ threshold: 0.2 });
  const [tabsRef, tabsVisible] = useScrollReveal({ threshold: 0.3 });
  const [menuRef, menuVisible] = useScrollReveal({ threshold: 0.1 });
  const [imageRef, imageVisible] = useScrollReveal({ threshold: 0.3 });

  // Animation de transition entre catégories
  const handleCategoryChange = (newCategory) => {
    if (newCategory === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(newCategory);
      setDisplayCategory(newCategory);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const categories = [
    { id: 'sale', name: 'Le Salé' },
    { id: 'sucre', name: 'Le Sucré' },
    { id: 'boissons', name: 'Les Boissons' },
    { id: 'glaces', name: 'Les Glaces' },
  ];

  const menuData = {
    sale: {
      title: 'Le Salé',
      subtitle: 'Galettes, pancakes & salades',
      sections: [
        {
          name: 'Galettes Traditionnelles',
          description: 'Farine de sarrasin bio & œufs bio de plein air',
          items: [
            { name: 'Galette beurre', price: '3,50€' },
            { name: 'Galette 1 ingrédient', desc: 'Œuf, jambon, emmental ou champignons', price: '6,50€' },
            { name: 'Galette 2 ingrédients', desc: 'Œuf, jambon, emmental ou champignons', price: '7,50€' },
            { name: 'Galette complète', desc: 'Œuf, jambon, emmental', price: '8,50€' },
            { name: 'Galette super complète', desc: 'Œuf, jambon, emmental & champignons', price: '9,50€' },
          ],
        },
        {
          name: 'Galettes Spéciales',
          items: [
            { name: 'Boulotte', desc: 'Jambon, chèvre, miel, salade & noix', price: '13,00€' },
            { name: 'Bel Air', desc: 'Crème fraîche, reblochon de Savoie AOP, lardons, pommes de terre & oignons caramélisés', price: '14,50€' },
            { name: 'Marine', desc: 'Saumon fumé, crème ciboulette & salade', price: '15,50€' },
            { name: 'Guynemer', desc: 'Andouille de Guémené, pommes de terre, oignons caramélisés & crème de moutarde', price: '14,80€' },
            { name: 'Nantes', desc: 'Emmental, Curé nantais, pommes de terre, poulet tandoori & salade', price: '15,60€' },
            { name: 'Sables', desc: 'Purée de Patates douces, St Jacques, Sauce Curry / agrumes, Tuile décorative au curry', price: '17,00€' },
            { name: 'Lucioles', desc: 'Œuf, Pulled Pork, Tomme de Vache « Le Bec Fin » Bio, Sauce Ranch, Oignons frits, Salade', price: '15,90€' },
          ],
        },
        {
          name: 'Pancakes à l\'Anglaise',
          items: [
            { name: 'Jambon', desc: 'Jambon, Curé nantais, œuf, emmental, sauce hollandaise', price: '14,00€' },
            { name: 'Bacon', desc: 'Bacon, chèvre, œuf, tomates confites, emmental, sauce hollandaise', price: '15,00€' },
            { name: 'Saumon', desc: 'Saumon fumé, chèvre, œuf, emmental, sauce hollandaise', price: '16,00€' },
          ],
        },
        {
          name: 'Les Salades',
          items: [
            { name: 'Poissons', desc: 'Salade verte, tomates confites, saumon fumé, chèvre, graines de courge, crème ciboulette', price: '16,50€' },
            { name: 'Mésanges', desc: 'Salade verte, tomates confites, camembert rôti au miel ou chèvre chaud, Jambon cru de pays, noix', price: '16,50€' },
          ],
        },
      ],
    },
    sucre: {
      title: 'Le Sucré',
      subtitle: 'Crêpes & pancakes sucrés',
      sections: [
        {
          name: 'Crêpes Classiques',
          description: 'Farine bio & œufs bio de plein air',
          items: [
            { name: 'Beurre sucre', price: '3,80€' },
            { name: 'Beurre sucre citron', price: '3,90€' },
            { name: 'Nesquik', price: '4,30€' },
            { name: 'Confitures', price: '4,50€' },
            { name: 'Confiture de lait', price: '4,00€' },
            { name: 'Chocolat', price: '6,00€' },
            { name: 'Nutella', price: '5,50€' },
            { name: 'Chocolat amandes caramélisées ou coco', price: '6,50€' },
            { name: 'Caramel au beurre salé', price: '6,50€' },
            { name: 'Banane chocolat', price: '7,30€' },
            { name: 'Crême de marron', price: '5,50€' },
          ],
        },
        {
          name: 'Les Crêpes Spéciales',
          items: [
            { name: 'Jade', desc: 'Kinder Schoko-Bons, chantilly, noisettes hachées, glace vanille', price: '8,50€' },
            { name: 'Benjamin', desc: 'Chocolat, éclats de pistaches, glace pistache', price: '7,40€' },
            { name: 'Apolline', desc: 'Crème de citron, feuilletine, sorbet framboise', price: '7,20€' },
            { name: 'Marion', desc: 'Crème de Carambar, éclats de noisettes, glace noisette', price: '7,90€' },
            { name: 'Justine', desc: 'Pommes poêlées, caramel, chantilly, glace vanille', price: '8,60€' },
            { name: 'Lucas', desc: 'Chocolat, confiture d\'oranges amères, flambée au Cointreau', price: '8,20€' },
            { name: 'Babou', desc: 'Brownie noix de pécan, caramel, noix de coco râpée, glace coco', price: '8,50€' },
            { name: 'Ambre', desc: 'Beurre de cacahuète, M&M\'S, chantilly', price: '8,50€' },
            { name: 'Tino', desc: 'Praliné Cacahuètes, Chocolat, Caramel, Glace Vanille, Cacahuètes Caramélisées', price: '9,50€' },
          ],
        },
        {
          name: 'Pancakes Sucrés',
          items: [
            { name: 'Sirop d\'érable', price: '7,00€' },
            { name: 'Chocolat', price: '7,00€' },
            { name: 'Caramel au beurre salé', price: '7,00€' },
            { name: 'Confiture', price: '7,00€' },
            { name: 'Beurre de cacahuète', price: '7,00€' },
            { name: 'Nutella', price: '7,00€' },
            { name: 'Confiture de lait', price: '7,00€' },
          ],
        },
      ],
    },
    boissons: {
      title: 'Boissons',
      subtitle: 'Cidres artisanaux, bières locales & vins',
      sections: [
        {
          name: 'Cidres',
          items: [
            { name: 'Bolée d\'Armorique Brut', desc: 'Loïc Raison - Pression', price: '3,80€', unit: 'bolée 24cl' },
            { name: 'Pichet 50cl', price: '7,50€' },
            { name: 'Pichet 75cl', price: '12,00€' },
            { name: 'Cidre Ecusson rosé', desc: 'Doux - 75cl', price: '12,00€' },
            { name: 'Séhédic Cidre bio artisanal', desc: 'La Forêt-Fouesnant - Brut, Demi-sec, Doux', price: '15,50€', unit: '75cl' },
            { name: 'Séhédic bio d\'exception Extra-Brut', desc: 'Fermentation très longue, fines bulles', price: '24,00€', unit: '75cl' },
          ],
        },
        {
          name: 'Bières',
          items: [
            { name: 'Pression 1664', price: '3,60€', unit: '25cl' },
            { name: 'Panaché', price: '3,50€', unit: '25cl' },
            { name: 'Monaco', price: '3,70€', unit: '25cl' },
            { name: 'Grimbergen ambrée', price: '6,00€', unit: '33cl' },
            { name: 'Grimbergen rouge', price: '6,50€', unit: '33cl' },
            { name: 'Liefmans Fruitesse', desc: 'Bière aromatisée aux fruits rouges', price: '6,50€', unit: '25cl' },
            { name: 'Brigantine', desc: 'Bière artisanale de Pornic - Ambrée ou blanche', price: '6,50€', unit: '33cl' },
            { name: 'La Dilettante', desc: 'Bière bio vannetaise - Blonde, Blanche IPA, Orangée IPA', price: '7,50€', unit: '33cl' },
          ],
        },
        {
          name: 'Vins',
          items: [
            { name: 'Muscadet s/Lie Domaine de la Grange', desc: 'Robe jaune clair, nez légèrement iodé, vif, frais', price: '3,40€ / 20,00€', unit: 'verre / bout.' },
            { name: 'IGP Val de Loire « Le Ch\'nin »', desc: 'Vin sec minéral frais aux notes fruitées', price: '4,10€ / 24,70€', unit: 'verre / bout.' },
            { name: 'AOP Saumur-Champigny « Pour Les Potes »', desc: 'Notes légères et fruitées', price: '3,90€ / 23,90€', unit: 'verre / bout.' },
            { name: 'IGP Méditéranné « J\'peux pas j\'ai rosé »', desc: 'Vin frais et fruité tout en finesse', price: '4,30€ / 25,60€', unit: 'verre / bout.' },
          ],
        },
        {
          name: 'Sans Alcool',
          items: [
            { name: 'Virgin mojito ou fraise', price: '6,00€', unit: '25cl' },
            { name: 'Jus de pomme « sous le pommier »', desc: 'Pommes non traitées', price: '5,00€', unit: '25cl' },
            { name: 'Jus de fruit', desc: 'Orange, fraise, ananas, pomme', price: '3,40€', unit: '27,5cl' },
            { name: 'Soft soda', desc: 'Coca cola, Orangina, Ice Tea, Schweppes', price: '3,90€' },
            { name: 'Limonade', price: '3,00€', unit: '27,5cl' },
          ],
        },
        {
          name: 'Boissons Chaudes',
          items: [
            { name: 'Café Bio Breton', desc: 'Torréfaction artisanale 100% arabica', price: '1,90€' },
            { name: 'Petit crème', price: '2,50€' },
            { name: 'Grand crème', price: '2,80€' },
            { name: 'Capuccino', price: '4,50€' },
            { name: 'Thé / Infusion Damman', price: '2,80€' },
          ],
        },
      ],
    },
    glaces: {
      title: 'Glaces',
      subtitle: 'Ma très bonne Glace – Artisanale française',
      sections: [
        {
          name: 'Glaces & Sorbets',
          description: 'Vanille, chocolat, caramel au beurre salé, menthe-chocolat, café, pistache, coco, rhum-raisin, noisette, blé noir | Sorbets : fraise, framboise, citron, cassis',
          items: [
            { name: '1 boule', price: '3,00€' },
            { name: '2 boules', price: '5,00€' },
            { name: '3 boules', price: '7,00€' },
          ],
        },
        {
          name: 'Coupes Glacées',
          items: [
            { name: 'Chocolat liégeois', desc: '2 boules chocolat, chocolat, chantilly, amandes caramélisées', price: '7,70€' },
            { name: 'Café liégeois', desc: '2 boules café, Kamok (liqueur de café), chantilly, amandes caramélisées', price: '8,00€' },
            { name: 'Colonel', desc: '2 boules citron, Vodka', price: '7,50€' },
            { name: 'After eight', desc: '2 boules menthe-chocolat, Get 27', price: '7,50€' },
            { name: 'Dame blanche', desc: '2 boules vanille, chocolat, chantilly, amandes caramélisées', price: '8,00€' },
            { name: 'Banana split', desc: '3 boules, banane, chocolat, chantilly, amandes caramélisées', price: '8,00€' },
            { name: 'La P\'tite glace rit', desc: '2 boules vanille, 1 boule caramel, caramel, chantilly, amandes caramélisées', price: '8,00€' },
            { name: 'Crumble rit', desc: '2 boules blé noir, crumble de sarrasin, caramel, chantilly', price: '8,50€' },
          ],
        },
      ],
    },
  };

  const currentMenu = menuData[activeCategory];

  return (
    <Section id="menu" bgColor="bg-[#F5F0E8]" className="relative overflow-hidden">
      {/* Fond avec formes organiques subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-[#E8E2D6] rounded-full blur-3xl opacity-50" />
        <div className="absolute top-[40%] -right-40 w-[400px] h-[600px] bg-[#DED8CC] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl opacity-40" />
        <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-[#E5DFD3] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[5%] right-[30%] w-[250px] h-[350px] bg-[#E0DAD0] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl opacity-35" />
      </div>

      {/* Feuillages décoratifs - Version responsive avec plus de feuilles */}

      {/* === MOBILE : Feuilles visibles sur téléphone === */}
      {/* Feuille mobile haut gauche */}
      <svg className="absolute top-4 left-2 w-20 h-20 pointer-events-none opacity-50 md:hidden" viewBox="0 0 60 60" fill="none">
        <ellipse cx="30" cy="25" rx="14" ry="22" fill="#6B7F5E" opacity="0.6" transform="rotate(-25 30 25)"/>
        <ellipse cx="20" cy="45" rx="10" ry="16" fill="#8BA37A" opacity="0.5" transform="rotate(20 20 45)"/>
        <path d="M30 8 Q30 25 28 50" stroke="#4A5D3F" strokeWidth="1" opacity="0.6"/>
      </svg>

      {/* Feuille mobile haut droite */}
      <svg className="absolute top-8 right-1 w-16 h-16 pointer-events-none opacity-45 md:hidden" viewBox="0 0 50 50" fill="none">
        <ellipse cx="25" cy="20" rx="12" ry="18" fill="#8BA37A" opacity="0.6" transform="rotate(30 25 20)"/>
        <ellipse cx="35" cy="38" rx="8" ry="12" fill="#6B7F5E" opacity="0.5" transform="rotate(-15 35 38)"/>
      </svg>

      {/* Feuilles mobile milieu gauche */}
      <svg className="absolute top-[30%] -left-2 w-14 h-24 pointer-events-none opacity-40 md:hidden" viewBox="0 0 40 80" fill="none">
        <ellipse cx="25" cy="20" rx="12" ry="18" fill="#6B7F5E" opacity="0.6" transform="rotate(-40 25 20)"/>
        <ellipse cx="20" cy="50" rx="10" ry="16" fill="#8BA37A" opacity="0.5" transform="rotate(-30 20 50)"/>
        <path d="M22 5 Q24 40 22 75" stroke="#4A5D3F" strokeWidth="1" opacity="0.5"/>
      </svg>

      {/* Feuilles mobile milieu droite */}
      <svg className="absolute top-[45%] -right-1 w-12 h-20 pointer-events-none opacity-40 md:hidden" viewBox="0 0 35 70" fill="none">
        <ellipse cx="15" cy="18" rx="10" ry="16" fill="#8BA37A" opacity="0.55" transform="rotate(35 15 18)"/>
        <ellipse cx="20" cy="45" rx="9" ry="14" fill="#6B7F5E" opacity="0.5" transform="rotate(25 20 45)"/>
      </svg>

      {/* Feuille mobile bas gauche */}
      <svg className="absolute bottom-[25%] left-1 w-12 h-16 pointer-events-none opacity-45 md:hidden" viewBox="0 0 40 55" fill="none">
        <ellipse cx="22" cy="20" rx="11" ry="17" fill="#6B7F5E" opacity="0.55" transform="rotate(-20 22 20)"/>
        <ellipse cx="15" cy="40" rx="8" ry="12" fill="#8BA37A" opacity="0.45" transform="rotate(15 15 40)"/>
      </svg>

      {/* Feuille mobile bas droite */}
      <svg className="absolute bottom-[20%] right-0 w-14 h-18 pointer-events-none opacity-40 md:hidden" viewBox="0 0 45 60" fill="none">
        <ellipse cx="25" cy="22" rx="12" ry="18" fill="#8BA37A" opacity="0.5" transform="rotate(40 25 22)"/>
        <ellipse cx="18" cy="45" rx="9" ry="13" fill="#6B7F5E" opacity="0.45" transform="rotate(-25 18 45)"/>
      </svg>

      {/* Petites feuilles dispersées mobile */}
      <svg className="absolute top-[55%] left-[8%] w-8 h-8 pointer-events-none opacity-35 md:hidden" viewBox="0 0 30 30" fill="none">
        <ellipse cx="15" cy="15" rx="7" ry="12" fill="#6B7F5E" transform="rotate(-35 15 15)"/>
      </svg>
      <svg className="absolute top-[70%] right-[5%] w-7 h-7 pointer-events-none opacity-30 md:hidden" viewBox="0 0 30 30" fill="none">
        <ellipse cx="15" cy="15" rx="6" ry="10" fill="#8BA37A" transform="rotate(25 15 15)"/>
      </svg>
      <svg className="absolute top-[15%] left-[60%] w-6 h-6 pointer-events-none opacity-25 md:hidden" viewBox="0 0 25 25" fill="none">
        <ellipse cx="12" cy="12" rx="5" ry="9" fill="#6B7F5E" transform="rotate(45 12 12)"/>
      </svg>

      {/* === TABLET & DESKTOP : Feuillages plus grands === */}
      {/* Branche haute gauche */}
      <svg className="absolute top-0 left-0 w-48 md:w-64 lg:w-72 h-auto pointer-events-none opacity-60 hidden md:block" viewBox="0 0 200 350" fill="none">
        <path d="M40 0 C35 50, 50 80, 45 130 C40 180, 55 220, 50 280 C48 320, 52 340, 50 350" stroke="#6B7F5E" strokeWidth="2" opacity="0.7"/>
        <ellipse cx="25" cy="40" rx="18" ry="32" fill="#6B7F5E" opacity="0.6" transform="rotate(-35 25 40)"/>
        <ellipse cx="55" cy="75" rx="15" ry="28" fill="#8BA37A" opacity="0.5" transform="rotate(25 55 75)"/>
        <ellipse cx="30" cy="120" rx="20" ry="35" fill="#6B7F5E" opacity="0.55" transform="rotate(-30 30 120)"/>
        <ellipse cx="60" cy="170" rx="14" ry="25" fill="#8BA37A" opacity="0.5" transform="rotate(30 60 170)"/>
        <ellipse cx="35" cy="220" rx="17" ry="30" fill="#6B7F5E" opacity="0.6" transform="rotate(-25 35 220)"/>
        <ellipse cx="55" cy="270" rx="13" ry="24" fill="#8BA37A" opacity="0.45" transform="rotate(20 55 270)"/>
        <ellipse cx="40" cy="320" rx="16" ry="28" fill="#6B7F5E" opacity="0.5" transform="rotate(-20 40 320)"/>
      </svg>

      {/* Branche haute droite */}
      <svg className="absolute top-20 right-0 w-40 md:w-56 lg:w-64 h-auto pointer-events-none opacity-55 hidden md:block" viewBox="0 0 180 300" fill="none">
        <path d="M140 0 C145 40, 130 70, 135 110 C140 150, 125 190, 130 240 C132 270, 128 290, 130 300" stroke="#6B7F5E" strokeWidth="2" opacity="0.6"/>
        <ellipse cx="155" cy="35" rx="16" ry="30" fill="#8BA37A" opacity="0.5" transform="rotate(30 155 35)"/>
        <ellipse cx="120" cy="70" rx="18" ry="32" fill="#6B7F5E" opacity="0.55" transform="rotate(-25 120 70)"/>
        <ellipse cx="150" cy="115" rx="14" ry="26" fill="#8BA37A" opacity="0.5" transform="rotate(35 150 115)"/>
        <ellipse cx="115" cy="160" rx="17" ry="30" fill="#6B7F5E" opacity="0.6" transform="rotate(-30 115 160)"/>
        <ellipse cx="145" cy="210" rx="15" ry="27" fill="#8BA37A" opacity="0.45" transform="rotate(25 145 210)"/>
        <ellipse cx="125" cy="260" rx="16" ry="28" fill="#6B7F5E" opacity="0.5" transform="rotate(-20 125 260)"/>
      </svg>

      {/* Branche milieu gauche */}
      <svg className="absolute top-[35%] -left-8 w-36 md:w-48 lg:w-56 h-auto pointer-events-none opacity-50 hidden md:block" viewBox="0 0 160 250" fill="none">
        <path d="M80 0 C75 30, 85 60, 80 100 C75 140, 85 180, 80 220 C78 240, 82 250, 80 250" stroke="#6B7F5E" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="60" cy="30" rx="22" ry="38" fill="#6B7F5E" opacity="0.5" transform="rotate(-40 60 30)"/>
        <ellipse cx="95" cy="80" rx="18" ry="32" fill="#8BA37A" opacity="0.45" transform="rotate(35 95 80)"/>
        <ellipse cx="55" cy="130" rx="20" ry="36" fill="#6B7F5E" opacity="0.5" transform="rotate(-35 55 130)"/>
        <ellipse cx="90" cy="185" rx="16" ry="28" fill="#8BA37A" opacity="0.4" transform="rotate(30 90 185)"/>
      </svg>

      {/* Branche milieu droite */}
      <svg className="absolute top-[50%] right-0 w-32 md:w-44 lg:w-52 h-auto pointer-events-none opacity-45 hidden md:block" viewBox="0 0 150 220" fill="none">
        <path d="M75 0 C80 25, 70 55, 75 90 C80 125, 70 160, 75 200 C77 215, 73 220, 75 220" stroke="#6B7F5E" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="100" cy="25" rx="20" ry="35" fill="#8BA37A" opacity="0.45" transform="rotate(40 100 25)"/>
        <ellipse cx="55" cy="70" rx="17" ry="30" fill="#6B7F5E" opacity="0.5" transform="rotate(-30 55 70)"/>
        <ellipse cx="95" cy="125" rx="19" ry="33" fill="#8BA37A" opacity="0.4" transform="rotate(35 95 125)"/>
        <ellipse cx="60" cy="180" rx="15" ry="26" fill="#6B7F5E" opacity="0.45" transform="rotate(-25 60 180)"/>
      </svg>

      {/* Branche coin bas gauche */}
      <svg className="absolute bottom-0 left-0 w-44 md:w-60 lg:w-72 h-auto pointer-events-none opacity-50 hidden md:block" viewBox="0 0 200 180" fill="none">
        <path d="M0 100 C40 95, 70 110, 110 100 C150 90, 170 105, 200 100" stroke="#6B7F5E" strokeWidth="2" opacity="0.6"/>
        <path d="M30 130 C50 80, 80 90, 90 50" stroke="#6B7F5E" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="25" cy="85" rx="18" ry="32" fill="#6B7F5E" opacity="0.55" transform="rotate(-50 25 85)"/>
        <ellipse cx="70" cy="60" rx="15" ry="27" fill="#8BA37A" opacity="0.5" transform="rotate(-35 70 60)"/>
        <ellipse cx="55" cy="120" rx="20" ry="35" fill="#6B7F5E" opacity="0.5" transform="rotate(15 55 120)"/>
        <ellipse cx="110" cy="80" rx="16" ry="28" fill="#8BA37A" opacity="0.45" transform="rotate(-25 110 80)"/>
        <ellipse cx="150" cy="95" rx="14" ry="25" fill="#6B7F5E" opacity="0.5" transform="rotate(10 150 95)"/>
        <ellipse cx="100" cy="130" rx="18" ry="30" fill="#8BA37A" opacity="0.4" transform="rotate(20 100 130)"/>
      </svg>

      {/* Branche coin bas droite */}
      <svg className="absolute bottom-10 right-0 w-40 md:w-52 lg:w-60 h-auto pointer-events-none opacity-55 hidden md:block" viewBox="0 0 180 200" fill="none">
        <path d="M180 150 C140 145, 110 160, 70 150 C30 140, 10 155, 0 150" stroke="#6B7F5E" strokeWidth="1.5" opacity="0.5"/>
        <path d="M150 180 C130 130, 100 140, 90 100" stroke="#6B7F5E" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="155" cy="130" rx="17" ry="30" fill="#8BA37A" opacity="0.5" transform="rotate(45 155 130)"/>
        <ellipse cx="110" cy="110" rx="20" ry="35" fill="#6B7F5E" opacity="0.55" transform="rotate(30 110 110)"/>
        <ellipse cx="130" cy="170" rx="15" ry="26" fill="#8BA37A" opacity="0.45" transform="rotate(-15 130 170)"/>
        <ellipse cx="70" cy="135" rx="18" ry="32" fill="#6B7F5E" opacity="0.5" transform="rotate(25 70 135)"/>
        <ellipse cx="95" cy="75" rx="14" ry="24" fill="#8BA37A" opacity="0.4" transform="rotate(40 95 75)"/>
      </svg>

      {/* Petites feuilles dispersées - Desktop/Tablet */}
      <svg className="absolute top-[25%] left-[15%] w-16 h-16 pointer-events-none opacity-40 hidden lg:block" viewBox="0 0 50 50" fill="none">
        <ellipse cx="25" cy="25" rx="12" ry="22" fill="#8BA37A" transform="rotate(-30 25 25)"/>
        <path d="M25 10 Q25 25 25 40" stroke="#6B7F5E" strokeWidth="1"/>
      </svg>
      <svg className="absolute top-[60%] right-[12%] w-14 h-14 pointer-events-none opacity-35 hidden lg:block" viewBox="0 0 50 50" fill="none">
        <ellipse cx="25" cy="25" rx="10" ry="18" fill="#6B7F5E" transform="rotate(25 25 25)"/>
        <path d="M25 12 Q25 25 25 38" stroke="#4A5D3F" strokeWidth="1"/>
      </svg>
      <svg className="absolute top-[75%] left-[8%] w-12 h-12 pointer-events-none opacity-30 hidden lg:block" viewBox="0 0 50 50" fill="none">
        <ellipse cx="25" cy="25" rx="11" ry="20" fill="#8BA37A" transform="rotate(-45 25 25)"/>
      </svg>
      <svg className="absolute top-[15%] right-[20%] w-10 h-10 pointer-events-none opacity-35 hidden lg:block" viewBox="0 0 50 50" fill="none">
        <ellipse cx="25" cy="25" rx="9" ry="16" fill="#6B7F5E" transform="rotate(40 25 25)"/>
      </svg>

      {/* Feuilles supplémentaires dans le contenu - visibles partout */}
      <svg className="absolute top-[40%] left-[3%] w-10 h-14 pointer-events-none opacity-30" viewBox="0 0 35 50" fill="none">
        <ellipse cx="18" cy="25" rx="9" ry="18" fill="#6B7F5E" transform="rotate(-20 18 25)"/>
      </svg>
      <svg className="absolute top-[65%] right-[2%] w-9 h-12 pointer-events-none opacity-25" viewBox="0 0 30 45" fill="none">
        <ellipse cx="15" cy="22" rx="8" ry="15" fill="#8BA37A" transform="rotate(30 15 22)"/>
      </svg>
      <svg className="absolute bottom-[35%] left-[5%] w-8 h-10 pointer-events-none opacity-30" viewBox="0 0 28 38" fill="none">
        <ellipse cx="14" cy="19" rx="7" ry="13" fill="#6B7F5E" transform="rotate(-35 14 19)"/>
      </svg>
      <svg className="absolute bottom-[45%] right-[4%] w-7 h-10 pointer-events-none opacity-25" viewBox="0 0 25 38" fill="none">
        <ellipse cx="12" cy="19" rx="6" ry="12" fill="#8BA37A" transform="rotate(25 12 19)"/>
      </svg>

      {/* Logo en haut */}
      <div
        ref={logoRef}
        className={`text-center mb-10 relative z-10 reveal-scale ${logoVisible ? 'revealed' : ''}`}
      >
        <div className="w-32 h-32 mx-auto mb-6">
          <img
            src="/logo.png"
            alt="La P'tite Crêpe Rit"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div
        ref={tabsRef}
        className={`flex flex-wrap justify-center gap-3 mb-12 relative z-10 reveal-up ${tabsVisible ? 'revealed' : ''}`}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${activeCategory === cat.id
                ? 'bg-sage text-white shadow-lg scale-105'
                : 'bg-white/80 text-wood-dark hover:bg-white hover:shadow-md border border-sage/20 hover:scale-105'
              }
            `}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <div
        ref={menuRef}
        className={`max-w-3xl mx-auto relative z-10 px-4 md:px-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4 scale-98' : 'opacity-100 translate-y-0 scale-100'} ${menuVisible ? '' : 'reveal-blur'}`}
      >
        {/* Menu Header avec lignes décoratives style PDF */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex-1 h-px bg-wood/30 max-w-[100px]" />
            <h3 className="font-display text-3xl md:text-4xl text-wood-dark tracking-wide uppercase">
              {currentMenu.title}
            </h3>
            <div className="flex-1 h-px bg-wood/30 max-w-[100px]" />
          </div>
          <p className="text-wood/60 italic text-sm mt-2">{currentMenu.subtitle}</p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-12">
          {currentMenu.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Header avec lignes style PDF */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-sage/40" />
                <h4 className="font-display text-xl md:text-2xl text-wood-dark text-center px-4 tracking-wide uppercase whitespace-nowrap">
                  {section.name}
                </h4>
                <div className="flex-1 h-px bg-sage/40" />
              </div>

              {section.description && (
                <p className="text-sm text-wood/60 text-center mb-6 italic max-w-xl mx-auto">
                  {section.description}
                </p>
              )}

              {/* Items style PDF */}
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group"
                  >
                    {/* Ligne principale : nom + pointillés + prix */}
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium text-wood-dark">
                        {item.name}
                        {item.unit && <span className="text-sm text-wood/50 ml-1">{item.unit}</span>}
                      </span>
                      {/* Pointillés */}
                      <span className="flex-1 border-b border-dotted border-wood/30 mx-1 mb-1" />
                      {/* Prix */}
                      <span className="font-medium text-wood-dark whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {/* Description en italique */}
                    {item.desc && (
                      <p className="text-sm text-wood/50 italic mt-0.5 ml-0">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note style PDF */}
        <div className="mt-16 text-center space-y-4">
          <p className="font-handwritten text-2xl text-wood/70">
            Toutes les galettes peuvent être personnalisées selon vos préférences
          </p>
          <p className="font-handwritten text-2xl text-wood/70">
            Toutes nos préparations sont faites maison
          </p>
          <p className="text-sm text-wood/50 italic mt-4">
            Farine issue de l'agriculture biologique & œuf bio de plein air.
          </p>
          <p className="text-sm text-wood/50 italic">
            Prix net service compris.
          </p>
        </div>
      </div>

      {/* Image décorative crêpe */}
      <div
        ref={imageRef}
        className={`mt-16 flex justify-center relative z-10 reveal-scale ${imageVisible ? 'revealed' : ''}`}
      >
        <div className="relative">
          <img
            src="/crepe-sucree.jpg"
            alt="Crêpe gourmande de La P'tite Crêpe Rit"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full ring-4 ring-sage/20 ring-offset-4 ring-offset-[#F5F0E8]" />
        </div>
      </div>
    </Section>
  );
};

export default Menu;
