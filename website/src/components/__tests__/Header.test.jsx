import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe('Header', () => {
  it('renders the header with logo and navigation', () => {
    render(<Header />);
    
    // Check if logo is present
    expect(screen.getByText('Template Repo')).toBeInTheDocument();
    
    // Check if navigation items are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows mobile menu when hamburger is clicked', () => {
    render(<Header />);
    
    // Click mobile menu button
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(menuButton);
    
    // Mobile menu should be visible (navigation items should be duplicated)
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks).toHaveLength(2); // One in desktop nav, one in mobile nav
  });

  it('has correct GitHub link', () => {
    render(<Header />);
    
    const githubLink = screen.getAllByText('GitHub')[0].closest('a');
    expect(githubLink).toHaveAttribute('href', process.env.GITHUB_REPO);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has accessible navigation', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Top');
  });
});