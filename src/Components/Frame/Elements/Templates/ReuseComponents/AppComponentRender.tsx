import React from 'react';
import AppContentMouseEvent from './AppContentMouseEvent';
import ContentLive from './live/ContentLive';

const AppComponentRender: React.FC = () => {
    return (
        <>
            <AppContentMouseEvent />
            <ContentLive />
        </>
    );
};

export default AppComponentRender;
