import {h} from './link'
import Tires from './tires'
import Ghost from './ghost'
import Shoes from './shoes'

export default props =>
<div class="combine">
  <h3 class="subtitle">Combine</h3>
  <div class="row">
    <div class="col-12 col-tablet-4">
      <h4>tires</h4>
      <Tires />
    </div>
    <div class="col-12 col-tablet-4">
      <h4>ghost</h4>
      <Ghost />
    </div>
    <div class="col-12 col-tablet-4">
      <h4>Shoes</h4>
      <Shoes />
    </div>
  </div>
</div>
