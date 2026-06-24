import { EarthGlobeIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('About')
    .icon(EarthGlobeIcon)
    .schemaType('aboutPage')
    .child(S.editor().title('About').schemaType('aboutPage').documentId('aboutPage'))
)