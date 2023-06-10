import { AcromymPipe, AcromymPipe as acromym } from './acromym.pipe';

describe('Pipe : AcromymPipe', () => {
  let pipe: AcromymPipe;
  it('create an instance', () => {
    const pipe = new acromym();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    pipe = new AcromymPipe();
  });

  it('should return empty string if input is empty', () => {
    const input = '';
    const res = pipe.transform(input);
    expect(res).toBe('');
  });

  it('should return acronym if input has multiple words', () => {
    const input = 'Agricultural Engineering';
    const res = pipe.transform(input);
    expect(res).toBe('AE');
  });

  it('should return the word itself if the input has only one word', () => {
    const input = 'English';
    const res = pipe.transform(input);
    expect(res).toBe('English');
  });
});
