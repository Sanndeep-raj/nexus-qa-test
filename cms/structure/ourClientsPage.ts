import { RocketIcon } from '@sanity/icons'
import { ListItemBuilder } from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Clients')
    .icon(RocketIcon)
    .schemaType('ourClientsPage')
    .child(S.editor().title('Our Clients').schemaType('ourClientsPage').documentId('ourClientsPage'))
)