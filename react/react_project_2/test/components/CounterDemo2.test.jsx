import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CounterDemo2 from "../../src/components/state/CounterDemo2";

describe('Counter Demo 2 Test Suite', () => {
    it('Increments when user clicks the button', async () => {
        const user = userEvent.setup();
        render(<CounterDemo2 />);

        expect(screen.getByText('Count: 0')).toBeInTheDocument();

        const incrementBtn = screen.getByRole('button', { name: /increment/i });

        await user.click(incrementBtn);

        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    })
})