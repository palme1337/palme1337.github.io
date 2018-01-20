
import _, {capitalize} from 'lodash';

class ScoringTyle {
  constructor({description, name}){
    this.name = name;
    this.description = description;
  }

  get formattedName() {
    return _.chain(this.name)
            .split('-')
            .map(capitalize)
            .join(' ')
            .value();
  }
}

const types = [

  new ScoringTyle({
    name: 'blue-cards',
    description: 'Victory points from blue cards.'
  }),
  new ScoringTyle({
    name: 'green-cards',
    description: 'Victory points from green cards.'
  }),
  new ScoringTyle({
    name: 'yellow-cards',
    description: 'Victory points from yellow cards.'
  }),
  new ScoringTyle({
    name: 'guild-cards',
    description: 'Victory points from guild cards.'
  }),
  new ScoringTyle({
    name: 'wonders',
    description: 'Amount of points on the wonders this player built.'
  }),
  new ScoringTyle({
    name: 'progress-tokens',
    description: 'Amount of points printed on the progress tokens.'
  }),
  new ScoringTyle({
    name: 'gold-coins',
    description: 'This player gets 1 point for every 3 gold in treasury.'
  }),
  new ScoringTyle({
    name: 'military',
    description: 'The player gets victory points denoted on the military track.'
  })
];

export default types;
