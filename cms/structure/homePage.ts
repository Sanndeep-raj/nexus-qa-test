import {HomeIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .schemaType('homePage')
    .child(S.editor().title('Home').schemaType('homePage').documentId('homePage'))
)