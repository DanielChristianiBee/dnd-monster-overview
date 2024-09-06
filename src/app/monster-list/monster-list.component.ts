import { Component, EventEmitter, Output } from '@angular/core';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent {
  @Output() monsterSelected = new EventEmitter<Monster>();

  monsters: Monster[] = [
    { id: 1, name: 'Goblin', description: 'Goblins are a race of small and numerous goblinoids common throughout Toril, often living in underground caverns near the surface known as lairs. The race is often, though not always, dominated by other goblinoids, most commonly hobgoblins. Goblins are, in fact, initially created by this related race to serve as scouts and infiltrators. Goblins are small, black-hearted, selfish humanoids that lair in caves, abandoned mines, despoiled dungeons, and other dismal settings. Individually weak, goblins gather in large-sometimes overwhelming-numbers. They crave power and regularly abuse whatever authority they obtain. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/goblin.png' },
    { id: 2, name: 'Hobgoblin', description: 'War horns sound, stones fly from catapults, and the thunder of a thousand booted feet echoes across the land as hobgoblins march to battle. Across the borderlands of civilization, settlements and settlers must contend with these aggressive humanoids, whose thirst for conquest is never satisfied. Hobgoblins have dark orange or red-orange skin, and hair ranging from dark red-brown to dark gray. Yellow or dark brown eyes peer out beneath their beetling brows, and their wide mouths sport sharp and yellowed teeth. A male hobgoblin might have a large blue or red nose, which symbolizes virility and power among goblinkin. Hobgoblins can live as long as humans, though their love of warfare and battle means that few do. By and large, hobgoblins, like their kin, are considered to be evil creatures and often meet this expectation. While goblinoid society is typically cruel and harsh, some individuals escape it to carry on lives of virtue. The few who take this risk and succeed often met cautious praise and acceptance from outsiders. Those that manage to escape goblinoid society, however, are continuously plagued by their goblinoid nature. Though hobgoblins are not necessarily evil, they are prone to violence and hot tempers, and often find it difficult to be truly altruistic. When provoked, which is not a hard task, hobgoblins are vindictive creatures who take glee in causing pain to those that injure them. Those hobgoblins who overcome this nature often manage this because of the rewards they find in serving good, rather than evil. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/hobgoblin.png' },
    { id: 3, name: 'Bugbear', description: 'Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured. Bugbears resembled hairy, feral goblins standing 7 feet (2.1 meters) tall. They take their name from their noses and claws, which are similar to those of bears. Their claws are not long and sharp enough to use as weapons, so bugbears often armor and arm themselves with a variety of purloined gear, which is normally second-rate and in poor repair. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/bugbear.png' },
    { id: 4, name: 'Skeleton', description: 'Skeletons arise when animated by dark magic. They heed the summons of spellcasters who call them from their stony tombs and ancient battlefields, or rise of their own accord in places saturated with death and loss, awakened by stirrings of necromantic energy or the presence of corrupting evil. Skeletons are undead animated corpses similar to zombies, but completely devoid of flesh and do not feed on the living. They can be made from virtually any solid creature, and as such their size and power varies widely. In addition to the basic humanoid skeleton, there are also skeletons created from wolves, trolls, ettins and even giants. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/skeleton.png' },
    { id: 5, name: 'White Dragon', description: 'The smallest, least intelligent, and most animalistic of the chromatic dragons, white dragons dwell in frigid climes, favoring arctic areas or icy mountains. They are vicious, cruel reptiles driven by hunger and greed. A white dragon has feral eyes, a sleek profile, and a spined crest. The scales of a wyrmling white dragon glisten pure white. As the dragon ages, its sheen disappears and some of its scales begin to darken, so that by the time it is old, it is mottled by patches of pale blue and light gray. This patterning helps the dragon blend into the realms of ice and stone in which it hunts, and to fade from view when it soars across a cloud-filled sky', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/whitedragon.png' },
    { id: 6, name: 'Green Dragon', description: 'The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible. A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck. A wyrmling green dragons thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges. A green dragons legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/venomfang.png' },
    { id: 7, name: 'Ogre', description: 'Ogres are as lazy of mind as they are strong of body. They live by raiding, scavenging, and killing for food and pleasure. The average adult specimen stands between 9 and 10 feet tall and weighs close to a thousand pounds. Ogres are a lazy, brutish, avaricious race with notoriously quick tempers. Their avaricious nature will often lead them distrust one another and incite squabbling over treasure. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/ogre.png' },
    { id: 8, name: 'Owlbear', description: 'An owlbears screech echoes through dark valleys and benighted forests, piercing the quiet night to announce the death of its prey. Feathers cover the thick, shaggy coat of its bearlike body, and the limpid pupils of its great round eyes stare furiously from its owlish head. Owlbears are monstrous beasts with the bodies of bears covered in thick shaggy coats of both bristly fur and feathers, ranging in coloration from yellowish brown to a brownish black. Fur is predominant on their bodies, while feathers become more common at their heads, and they have thick hides. Their heads are avian, like those of owls, with large round eyes with limpid pupils and rimmed in red. Their beaks are hooked or serrated and has a yellow to dull ivory hue. Their claws are fleshy and, being avian, can be counted as talons. Their terrible screeches are known to split the night and echo across the land as a warning to others. Those who have run-ins with them and live often described bestial insanity in its eyes. A little larger and heavier than females, a fully grown male specimen stands 8 feet (2.4 meters) high and weighs 1,300​ to ​1,500 pounds (590​ to ​680 kilograms), has 2‑inch (5.1‑centimeter) claws, and darker coats than females. ', imageUrl: 'https://www.dansimworld.nl/afbeeldingen/owlbear.png' }
  ];
  

  onSelect(monster: Monster) {
    this.monsterSelected.emit(monster);
  }
}