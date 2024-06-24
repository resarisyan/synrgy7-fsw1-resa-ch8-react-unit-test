import { render, screen } from '@testing-library/react';
import ConfirmModal from '@/components/fragments/ConfirmModal';
jest.mock('@/assets/images/img-BeepBeep.png', () => 'mocked-car-image');

export default ConfirmModal;

describe('ConfirmModal', () => {
  const defaultProps = {
    id: 'test-modal',
    title: 'Test Title',
    message: 'Test message',
    loading: false,
  };

  it('should render the ConfirmModal component', () => {
    render(<ConfirmModal {...defaultProps} />);
    expect(screen.getByTestId('dialog')).toBeInTheDocument();
    expect(screen.getByAltText('car')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('should render the loading spinner when loading is true', () => {
    render(<ConfirmModal {...defaultProps} loading={true} />);
    expect(screen.getByTestId('confirm')).toBeDisabled();
  });

  it('should render the title in the button when loading is false', () => {
    render(<ConfirmModal {...defaultProps} loading={false} />);
    expect(screen.getByTestId('confirm').textContent).toBe('Test Title');
  });

  it('should render the Cancel button', () => {
    render(<ConfirmModal {...defaultProps} />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('should enable the confirm button when loading is false', () => {
    render(<ConfirmModal {...defaultProps} loading={false} />);
    expect(screen.getByTestId('confirm')).not.toBeDisabled();
  });
});
