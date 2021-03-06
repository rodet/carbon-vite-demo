import React from 'react'

import {
	Header,
	HeaderContainer,
	HeaderName,
	HeaderNavigation,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderGlobalBar,
	SkipToContent,
	SideNav,
	SideNavItems,
	HeaderSideNavItems,
} from 'carbon-components-react';

const TutorialHeader = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Carbon Tutorial">
				<SkipToContent />
				<HeaderMenuButton
					aria-label="Open menu"
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="IBM">
					Carbon Tutorial
				</HeaderName>
				<HeaderNavigation aria-label="Carbon Tutorial">
					<HeaderMenuItem href="/profile">Me</HeaderMenuItem>
					<HeaderMenuItem href="/profile/john">John</HeaderMenuItem>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}>
					<SideNavItems>
						<HeaderSideNavItems>
							<HeaderMenuItem href="/profile">Me</HeaderMenuItem>
							<HeaderMenuItem href="/profile/john">John</HeaderMenuItem>
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar />
			</Header>
		)}
	/>
);

export default TutorialHeader;
