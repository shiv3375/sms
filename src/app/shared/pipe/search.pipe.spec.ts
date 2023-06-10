import { Student } from 'src/app/featured/student/models/student';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe: SearchPipe;
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  beforeEach(() => {
    pipe = new SearchPipe();
  });
  it('should return an empty array if items is null', () => {
    const items = null;
    const searchText = 'test';
    const fields = ['name'];

    const result = pipe.transform(items, searchText, fields);

    expect(result).toEqual([]);
  });

  it('should return the original items array if searchText is empty', () => {
    const items = [
      {
        name: 'Jane Smith',
        id: 2,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-02-28',
        DOJ: '2022-01-01',
        semester: 2,
        grade: 7.5,
        cityId: 3,
      },
      {
        name: 'John Doe',
        id: 3,
        dept: {
          id: 2,
          dept_name: 'Mathematics',
          HOD: 'Emily Johnson',
        },
        DOB: '1999-05-15',
        DOJ: '2021-09-10',
        semester: 6,
        grade: 8.2,
        cityId: 1,
      },
      {
        name: 'Emma Thompson',
        id: 4,
        dept: {
          id: 3,
          dept_name: 'Physics',
          HOD: 'Michael Brown',
        },
        DOB: '1997-11-03',
        DOJ: '2020-08-20',
        semester: 6,
        grade: 9,
        cityId: 2,
      },
      {
        name: 'David Wilson',
        id: 5,
        dept: {
          id: 1,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-07-22',
        DOJ: '2021-01-05',
        semester: 3,
        grade: 7.8,
        cityId: 3,
      },
      {
        name: 'Olivia Davis',
        id: 6,
        dept: {
          id: 4,
          dept_name: 'Chemistry',
          HOD: 'Sarah Wilson',
        },
        DOB: '1999-04-12',
        DOJ: '2020-09-15',
        semester: 5,
        grade: 8.6,
        cityId: 2,
      },
      {
        name: 'Michael Johns',
        id: 7,
        dept: {
          id: 3,
          dept_name: 'Computer Science',
          HOD: 'John Smith',
        },
        DOB: '1998-12-01',
        DOJ: '2022-02-10',
        semester: 2,
        grade: 7.3,
        cityId: 1,
      },
    ];
    const searchText = '';
    const fields = ['name'];

    const result = pipe.transform(items, searchText, fields);

    expect(result).toEqual(items);
  });

  it('should handle nested fields', () => {
    const items = [
      { person: { name: 'John Doe', age: 25 } },
      { person: { name: 'Jane Smith', age: 30 } },
      { person: { name: 'Adam Johnson', age: 35 } },
    ];
    const searchText = 'john';
    const fields = ['person.name'];

    const result = pipe.transform(items, searchText, fields);

    expect(result).toEqual([
      { person: { name: 'John Doe', age: 25 } },
      { person: { name: 'Adam Johnson', age: 35 } },
    ]);
  });

  it('should filter items based on searchText in specified fields', () => {
    const items = [
      { name: 'John Doe', age: 25 },
      { name: 'Jane Smith', age: 30 },
      { name: 'Adam Johnson', age: 35 },
    ];
    const searchText = 'john';
    const fields = ['name'];

    const result = pipe.transform(items, searchText, fields);

    expect(result).toEqual([
      { name: 'John Doe', age: 25 },
      { name: 'Adam Johnson', age: 35 },
    ]);
  });
  // it('should return the student id if the input name matches', () => {
  //   // const input='J'
  //   const student: Student[] = [
  //     {
  //       name: 'Jane Smith',
  //       id: 2,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-02-28',
  //       DOJ: '2022-01-01',
  //       semester: 2,
  //       grade: 7.5,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'John Doe',
  //       id: 3,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1999-05-15',
  //       DOJ: '2021-09-10',
  //       semester: 6,
  //       grade: 8.2,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Emma Thompson',
  //       id: 4,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Physics',
  //         HOD: 'Michael Brown',
  //       },
  //       DOB: '1997-11-03',
  //       DOJ: '2020-08-20',
  //       semester: 6,
  //       grade: 9,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'David Wilson',
  //       id: 5,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-07-22',
  //       DOJ: '2021-01-05',
  //       semester: 3,
  //       grade: 7.8,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'Olivia Davis',
  //       id: 6,
  //       dept: {
  //         id: 4,
  //         dept_name: 'Chemistry',
  //         HOD: 'Sarah Wilson',
  //       },
  //       DOB: '1999-04-12',
  //       DOJ: '2020-09-15',
  //       semester: 5,
  //       grade: 8.6,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'Michael Johns',
  //       id: 7,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-12-01',
  //       DOJ: '2022-02-10',
  //       semester: 2,
  //       grade: 7.3,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Sophia Anderson',
  //       id: 8,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1997-09-20',
  //       DOJ: '2021-01-01',
  //       semester: 4,
  //       grade: 8.9,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'Daniel Thompson',
  //       id: 9,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-06-08',
  //       DOJ: '2020-09-05',
  //       semester: 6,
  //       grade: 8.1,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'Emily Wilson',
  //       id: 10,
  //       dept: {
  //         id: 4,
  //         dept_name: 'Chemistry',
  //         HOD: 'Sarah Wilson',
  //       },
  //       DOB: '1999-03-17',
  //       DOJ: '2021-01-20',
  //       semester: 3,
  //       grade: 7.7,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'William Johnson',
  //       id: 11,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1997-08-11',
  //       DOJ: '2022-03-01',
  //       semester: 5,
  //       grade: 8.3,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'Isabella Smith',
  //       id: 12,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1999-02-04',
  //       DOJ: '2020-10-15',
  //       semester: 2,
  //       grade: 7.9,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'James Davis',
  //       id: 13,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Physics',
  //         HOD: 'Michael Brown',
  //       },
  //       DOB: '1998-05-21',
  //       DOJ: '2021-02-05',
  //       semester: 4,
  //       grade: 8.7,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Mia Anderson',
  //       id: 14,
  //       dept: {
  //         id: 4,
  //         dept_name: 'Chemistry',
  //         HOD: 'Sarah Wilson',
  //       },
  //       DOB: '1997-10-09',
  //       DOJ: '2020-10-20',
  //       semester: 6,
  //       grade: 9.2,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'Alexander Thompson',
  //       id: 15,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-07-06',
  //       DOJ: '2021-03-10',
  //       semester: 3,
  //       grade: 8,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'Ava Wilson',
  //       id: 16,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1999-01-23',
  //       DOJ: '2020-11-05',
  //       semester: 5,
  //       grade: 8.5,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Benjamin Johnson',
  //       id: 17,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Physics',
  //         HOD: 'Michael Brown',
  //       },
  //       DOB: '1997-12-18',
  //       DOJ: '2022-04-01',
  //       semester: 2,
  //       grade: 7.6,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'Charlotte Davis',
  //       id: 18,
  //       dept: {
  //         id: 4,
  //         dept_name: 'Chemistry',
  //         HOD: 'Sarah Wilson',
  //       },
  //       DOB: '1999-11-11',
  //       DOJ: '2021-03-20',
  //       semester: 4,
  //       grade: 8.4,
  //       cityId: 3,
  //     },
  //     {
  //       name: 'Henry Smith',
  //       id: 19,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-09-14',
  //       DOJ: '2020-12-01',
  //       semester: 6,
  //       grade: 7.8,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Scarlett Thompson',
  //       id: 20,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1997-07-27',
  //       DOJ: '2022-05-10',
  //       semester: 3,
  //       grade: 9.1,
  //       cityId: 2,
  //     },
  //     {
  //       name: 'John Smith',
  //       id: 21,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1999-02-18',
  //       DOJ: '2021-06-05',
  //       semester: 2,
  //       grade: 7.5,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Emma Johnson',
  //       id: 22,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1998-11-09',
  //       DOJ: '2022-09-20',
  //       semester: 4,
  //       grade: 8.2,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Michael Brown',
  //       id: 23,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Physics',
  //         HOD: 'Michael Brown',
  //       },
  //       DOB: '1997-07-04',
  //       DOJ: '2021-10-01',
  //       semester: 6,
  //       grade: 9,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'David Wilson',
  //       id: 24,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1999-04-25',
  //       DOJ: '2022-01-05',
  //       semester: 3,
  //       grade: 7.8,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Olivia Davis',
  //       id: 25,
  //       dept: {
  //         id: 4,
  //         dept_name: 'Chemistry',
  //         HOD: 'Sarah Wilson',
  //       },
  //       DOB: '1998-10-18',
  //       DOJ: '2021-11-15',
  //       semester: 5,
  //       grade: 8.6,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Michael Johnson',
  //       id: 26,
  //       dept: {
  //         id: 3,
  //         dept_name: 'Physics',
  //         HOD: 'Michael Brown',
  //       },
  //       DOB: '1997-07-31',
  //       DOJ: '2022-03-10',
  //       semester: 2,
  //       grade: 7.3,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Sophia Anderson',
  //       id: 27,
  //       dept: {
  //         id: 2,
  //         dept_name: 'Mathematics',
  //         HOD: 'Emily Johnson',
  //       },
  //       DOB: '1999-06-24',
  //       DOJ: '2021-09-01',
  //       semester: 4,
  //       grade: 8.9,
  //       cityId: 1,
  //     },
  //     {
  //       name: 'Daniel Thompson',
  //       id: 28,
  //       dept: {
  //         id: 1,
  //         dept_name: 'Computer Science',
  //         HOD: 'John Smith',
  //       },
  //       DOB: '1998-03-17',
  //       DOJ: '2020-09-05',
  //       semester: 6,
  //       grade: 8.1,
  //       cityId: 1,
  //     },
  //   ];
  //   const searchText = 'Daniel';

  //   const fields: string[] = ['name', 'dept.dept_name'];
  //   const res = pipe.transform(student, searchText, fields);
  //   // expect(res).toBe()
  // });
});
