import { render, screen } from '@testing-library/react';
import WeatherElement from './WeatherElement';

test('renders title and content', () => {
    const title = 'expected title';
    const contentText = 'this is expected content';

    render(<WeatherElement title={title} content={<div>{contentText}</div>}/>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
});
