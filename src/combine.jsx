import {h} from './link'
import Tires from './tires'
import Ghost from './ghost'

export default props =>
<div class="combine">
  <h3 class="subtitle">Combine</h3>
  <div class="row">
    <div class="col-4">
      <Tires />
    </div>
    <div class="col-4">
      <Ghost />
    </div>
  </div>
</div>
