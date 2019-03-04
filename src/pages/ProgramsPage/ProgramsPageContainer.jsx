import { withQuery } from '../../graphql/hocs'
import { programs } from '../../graphql/queries'
import ProgramsPage from './ProgramsPage'

const ProgramsPageContainer = ProgramsPage

export default withQuery({ query: programs })(ProgramsPageContainer)
