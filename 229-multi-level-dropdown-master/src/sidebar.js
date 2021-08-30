import React from 'react';
import { useHistory } from "react-router-dom";

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Sidebar() {
    const history = useHistory();
    // const location = useLocation();
    return (
        <>
            <Navigation
                // activeItemId={location.pathname}
                // you can use your own router's api to get pathname
                activeItemId="/"
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '/details',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => 'a',
                    },
                    {
                        title: 'Management',
                        itemId: '/details',
                        elemBefore: () => 'b',
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/details',
                                // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                                elemBefore: () => 'A',
                                subNav: [
                                    {
                                        title: 'Dashboard',
                                        itemId: '/details',
                                        // you can use your own custom Icon component as well
                                        // icon is optional
                                        elemBefore: () => 'a',
                                    }
                                ]
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                                elemBefore: () => 'A',
                            },
                        ],
                    },
                    {
                        title: 'Another Item',
                        itemId: '/another',
                        subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}