import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';
import React from 'react';

const meta: Meta<typeof Button> = {
    title: 'Reusable/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
                'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 
                'outline-warning', 'outline-info'
            ],
            description: 'Button variant color',
        },
        size: {
            control: 'select',
            options: ['sm', 'lg', undefined],
            description: 'Button size',
        },
        iconPosition: {
            control: 'radio',
            options: ['left', 'right'],
            description: 'Position of the icon',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'Button type',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ==========================================
// SOLID BUTTON VARIANTS
// ==========================================

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning Button',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info Button',
    },
};

export const Light: Story = {
    args: {
        variant: 'light',
        children: 'Light Button',
    },
};

export const Dark: Story = {
    args: {
        variant: 'dark',
        children: 'Dark Button',
    },
};

// ==========================================
// OUTLINE BUTTON VARIANTS
// ==========================================

export const OutlinePrimary: Story = {
    args: {
        variant: 'outline-primary',
        children: 'Outline Primary',
    },
};

export const OutlineSecondary: Story = {
    args: {
        variant: 'outline-secondary',
        children: 'Outline Secondary',
    },
};

export const OutlineSuccess: Story = {
    args: {
        variant: 'outline-success',
        children: 'Outline Success',
    },
};

export const OutlineDanger: Story = {
    args: {
        variant: 'outline-danger',
        children: 'Outline Danger',
    },
};

export const OutlineWarning: Story = {
    args: {
        variant: 'outline-warning',
        children: 'Outline Warning',
    },
};

export const OutlineInfo: Story = {
    args: {
        variant: 'outline-info',
        children: 'Outline Info',
    },
};

// ==========================================
// SIZE VARIATIONS
// ==========================================

export const SmallButton: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',
    },
};

export const MediumButton: Story = {
    args: {
        variant: 'primary',
        children: 'Medium Button',
    },
};

export const LargeButton: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Button',
    },
};

// ==========================================
// STATES
// ==========================================

export const Disabled: Story = {
    args: {
        variant: 'primary',
        children: 'Disabled Button',
        disabled: true,
    },
};

export const Interactive: Story = {
    args: {
        variant: 'primary',
        children: 'Click Me!',
        onClick: () => alert('Button clicked!'),
    },
};

// ==========================================
// COMPREHENSIVE SHOWCASE
// ==========================================

export const AllVariants: Story = {
    render: () => (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Solid Buttons</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="light">Light</Button>
                    <Button variant="dark">Dark</Button>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Outline Buttons</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <Button variant="outline-primary">Outline Primary</Button>
                    <Button variant="outline-secondary">Outline Secondary</Button>
                    <Button variant="outline-success">Outline Success</Button>
                    <Button variant="outline-danger">Outline Danger</Button>
                    <Button variant="outline-warning">Outline Warning</Button>
                    <Button variant="outline-info">Outline Info</Button>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Button Sizes</h3>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <Button variant="primary" size="sm">Small</Button>
                    <Button variant="primary">Medium</Button>
                    <Button variant="primary" size="lg">Large</Button>
                </div>
            </div>

            <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 600 }}>Disabled States</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <Button variant="primary" disabled>Primary Disabled</Button>
                    <Button variant="success" disabled>Success Disabled</Button>
                    <Button variant="outline-danger" disabled>Outline Disabled</Button>
                </div>
            </div>
        </div>
    ),
};


