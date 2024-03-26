/**
 * Generates HTML content for the English instructions related to using the arrow keys. This content
 * includes an image representing the arrow keys and a text instruction on their use in the game,
 * emphasizing cautious movement to avoid enemies.
 *
 * @returns {string} HTML content with instructions and an image for moving the character using arrow keys.
 */
function generateArrowKeyContentEnglish() {
  return /*html*/ `
      <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
            <span class="instruction-text">
              USE THE ARROW KEYS TO MOVE SHARKIE IN ALL DIRECTIONS. HOWEVER, BE CAUTIOUS IN YOUR MOVEMENTS, YOUR ENEMIES ARE ON THE LOOKOUT AND WILL NOT HESITATE
              TO PREVENT YOU FROM REACHING YOUR GOALS!
            </span>
    `;
}

/**
 * Generates HTML content for the German instructions related to using the arrow keys. This includes
 * an image of the arrow keys and a detailed instruction for maneuvering Sharkie within the game,
 * cautioning players about enemies that might thwart their progress.
 *
 * @returns {string} HTML content including an instructional image and text for navigating using arrow keys in German.
 */
function generateArrowKeyContentGerman() {
  return /*html*/ `
      <img img class="arrow-key-image" src="./img/6.Botones/Key/arrow keys.png" alt="Image MOVE" />
            <span class="instruction-text">
              VERWENDE DIE PFEILTASTEN, UM SHARKIE IN ALLE RICHTUNGEN ZU BEWEGEN. SEI JEDOCH VORSICHTIG BEI DEINEN BEWEGUNGEN, DEINE FEINDE SIND AUF DER LAUER UND WERDEN NICHT ZÖGERN, 
              DICH DARAN ZU HINDERN, DEINE ZIELE ZU ERREICHEN!
            </span>
    `;
}

/**
 * Generates HTML content for the English instructions related to using the spacebar. This content
 * includes an image representing the spacebar key and text instruction on its use for attacking in the game,
 * highlighting the need for proximity and caution during attacks.
 *
 * @returns {string} HTML content with instructions and an image for attacking using the spacebar key.
 */
function generateSpaceKeyContentEnglish() {
  return /*html*/ `
      <img img class="space-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
            <span class="instruction-text">
              USE SPACEBAR TO FLING PUFFERFISH. ATTACK EFFECTIVE ONLY IN CLOSE PROXIMITY.
              BE CAREFUL, APPROACH WITH CAUTION TO ACHIEVE SAFETY WITHOUT DAMAGE.
            </span>
    `;
}

/**
 * Generates HTML content for the German instructions related to using the spacebar. This content
 * includes an image representing the spacebar key and text instruction on its use for attacking in the game,
 * emphasizing the importance of proximity for effective attacks and the need for cautious approach.
 *
 * @returns {string} HTML content with instructions and an image for attacking using the spacebar key in German.
 */
function generateSpaceKeyContentGerman() {
  return /*html*/ `
      <img img class="space-key-image" src="./img/6.Botones/Key/Space Bar key.png" alt="Image ATTACK SPACE" />
            <span class="instruction-text">
              VERWENDE LEERTASTE, UM KUGELFISCH WEWZUSCHLEUDERN. ANGRIFF NUR IN DIREKTER NÄHE EFFEKTIV. SEI VORSICHTIG, NÄHERE DICH BEDACHT, 
              UM OHNE SCHADEN SICHERHEIT ZU ERREICHEN.
            </span>
    `;
}

/**
 * Generates HTML content for the English instructions related to using the 'D' key. This content
 * includes an image representing the 'D' key and text instruction on its use for capturing jellyfish
 * with a bubble from a distance, noting its effectiveness only against jellyfish and not against pufferfish
 * or the final boss.
 *
 * @returns {string} HTML content with instructions and an image for using the 'D' key to attack in English.
 */
function generateDkeyContentEnglish() {
  return /*html*/ `
      <img img class="d-g-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
            <span class="instruction-text">
             FROM A DISTANCE, YOU CAN CATCH JELLYFISH WITH A BUBBLE BY PRESSING D. 
             THIS ATTACK METHOD IS ONLY EFFECTIVE AGAINST JELLYFISH. PUFFERFISH AND THE FINAL BOSS ARE IMMUNE AND RESPOND WITH A SMILE.
            </span>
    `;
}

/**
 * Generates HTML content for the German instructions related to using the 'D' key. This content
 * includes an image representing the 'D' key and a text instruction on its use for capturing jellyfish
 * with a bubble from a distance, highlighting that this method is effective only against jellyfish,
 * with pufferfish and the final boss being immune and responding merely with a smile.
 *
 * @returns {string} HTML content with instructions and an image for using the 'D' key to attack in German.
 */
function generateDkeyContentGerman() {
  return /*html*/ `
      <img img class="d-g-key-image" src="./img/6.Botones/Key/D key.png" alt="Image ATTACK D" />
            <span class="instruction-text">
              AUS DER FERNE KANNST DU QUALLEN MIT EINER BLASE EINFANGEN, INDEM DU D DRÜCKST. DIESE ANGRIFFSMETHODE IST NUR GEGEN QUALLEN EFFEKTIV. 
              KUGELFISCHE UND DER ENDBOSS SIND IMMUN UND REAGIEREN MIT EINEM LÄCHELN.
            </span>
    `;
}

/**
 * Generates HTML content for the English instructions related to using the 'G' key. This content
 * includes an image representing the 'G' key and text instruction on releasing poison bubbles
 * by collecting poison containers. It advises sparing and strategic use against the final boss,
 * noting that pufferfish are immune and jellyfish can cause the bubbles to burst.
 *
 * @returns {string} HTML content with instructions and an image for using the 'G' key in English.
 */
function generateGkeyContentEnglish() {
  return /*html*/ `
      <img img class="d-g-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK G" />
            <span class="instruction-text">
             BY COLLECTING POISON CONTAINERS, YOU CAN RELEASE POISON BUBBLES WITH G. HOWEVER, USE THEM SPARINGLY AND STRATEGICALLY AGAINST THE FINAL BOSS.
             PUFFERFISH ARE IMMUNE TO THE POISON, AND JELLYFISH CAN CAUSE THE POISON BUBBLE TO BURST
            </span>
    `;
}

/**
 * Generates HTML content for the German instructions related to using the 'G' key. This content
 * includes an image representing the 'G' key and a text instruction on its use for releasing poison
 * bubbles, following the collection of poison containers. It advises sparing and strategic use against
 * the final boss, notes the immunity of pufferfish to the poison, and cautions that jellyfish can cause
 * the poison bubble to burst.
 *
 * @returns {string} HTML content with instructions and an image for using the 'G' key to release poison in German.
 */
function generateGkeyContentGerman() {
  return /*html*/ `
      <img img class="d-g-key-image" src="./img/6.Botones/Key/G Key.png" alt="Image ATTACK D" />
            <span class="instruction-text">
             DURCH DAS EINSAMMELN VON GIFTBEHÄLTERN KÖNNEN SIE GIFTBLASEN MIT G FREISETZEN. SETZEN SIE DIESE JEDOCH SPARSAM UND STRATEGISCH GEGEN DEN ENDBOSS EIN.
             KUGELFISCHE SIND IMMUN GEGEN DAS GIFT, UND QUALLEN KÖNNEN DIE GIFTBLASE ZUM PLATZEN BRINGEN.
            </span>
    `;
}
