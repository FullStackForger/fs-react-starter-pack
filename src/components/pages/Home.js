import React from 'react'
import Page from './Page'
import {Panel, Button} from 'react-bootstrap'

export default ()=> (
	<Page>
		<Panel header="Home">

			<div>
				<h3>FS React Starter Pack</h3>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, dui quis tincidunt pulvinar, magna turpis lobortis nisl, quis consequat nunc dolor non dolor. Nulla a hendrerit mauris. Donec maximus aliquet suscipit. Aliquam vel efficitur elit. Nunc in arcu quis elit laoreet pharetra quis id mauris. Sed vel est ac eros viverra sagittis. Donec tristique massa lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum quis metus placerat sapien pretium blandit ut ac massa. Praesent quis luctus mi, at elementum sapien. Maecenas iaculis vulputate nisi at gravida. Aenean pulvinar, mauris in sodales dapibus, ligula lectus dictum urna, id tempor elit nunc id dolor.
			</div>
		</Panel>

		<div className="text-center">
			<Button className="btn btn-default"
							href="https://github.com/fullstackforger/fs-react-starter-pack">
				GitHub project
			</Button>
			<Button className="btn btn-default"
							href="https://github.com/fullstackforger/fs-react-starter-pack/issues/new">
				Report issue
			</Button>
		</div>
	</Page>
)