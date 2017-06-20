import {h} from './link'
import Tires from './tires'
import Ghost from './ghost'
import Slipper from './slipper'
import Insect from './insect'

export default props =>
<div class="combine">
  <h2 class="title">Combine</h2>
  <div class="row">
    <div class="col-12 col-tablet-4">
      <h3 class="subtitle">tires</h3>
      <Tires />
    </div>
    <div class="col-12 col-tablet-4">
      <h3 class="subtitle">ghost</h3>
      <Ghost />
    </div>
    <div class="col-12 col-tablet-4">
      <h3 class="subtitle">Smash the cockroach with slipper</h3>
      <div class="smash-insect">
        <Slipper />
        <Insect />
      </div>
    </div>
  </div>
</div>
