INSERT INTO department 
    (name) 
VAlUES 
    ('Front-of-House'),
    ('Back-of-House'),
    ('Accounting'),
    ('Marketing'),
    ('Ownership');

INSERT INTO job 
    (title, salary, department_id)
VAlUES
    ('Server', '80000', 1),
    ('Expediter', '50000', 1),
    ('Host', '40000', 1),
    ('Bartender', '75000', 1),
    ('Head Cook', '60000', 2),
    ('Cook', '40000', 2),
    ('Dishwasher', '25000', 2),
    ('Accountant', '75000', 3),
    ('FoH Manager', '56000', 1),
    ('BoH Manager', '56000', 2),
    ('Accountant Manager', '56000', 3),
    ('Head Manager', '75000', 4),
    ('Marketer', '60000', 4),
    ('Owner', '200000', 5);

INSERT INTO employee 
    (first_name, last_name, job_id, manager_id)
VAlUES
    ('James', 'Fraser', 1, 24),
    ('Jack', 'London', 1, 24),
    ('Robert', 'Bruce', 1, 24),
    ('Peter', 'Greenaway', 1, 24),
    ('Derek', 'Jarman', 1, 24),
    ('Paolo', 'Pasolini', 1, 24),
    ('Heathcote', 'Williams', 1, 24),
    ('Sandy', 'Powell', 1, 24),
    ('Emil', 'Zola', 1, 24),
    ('Sissy', 'Coalpits', 1, 24),
    ('Antoinette', 'Capet', 2, 24),
    ('Samuel', 'Delany', 2, 24),
    ('Tony', 'Duvert', 3, 24),
    ('Dennis', 'Cooper', 3, 24),
    ('Monica', 'Bellucci', 4, 24),
    ('Samuel', 'Johnson', 4, 24),
    ('John', 'Dryden', 5, 25),
    ('Alexander', 'Pope', 6, 25),
    ('Lionel', 'Johnson', 6, 25),
    ('Aubrey', 'Beardsley', 6, 25),
    ('Tulse', 'Luper', 7, 25),
    ('William', 'Morris', 7, 25),
    ('George', 'Shaw', 8, 26),
    ('Arnold', 'Bennett', 9, NULL), 
    ('Algernon', 'Blackwood', 10, NULL),
    ('Rhoda', 'Broughton', 11, NULL), 
    ('Hart', 'Crane', 12, NULL),
    ('Vitorio', 'DeSica', 13, 27),
    ('Wilkie', 'Collins', 13, 27),
    ('Elizabeth', 'Gaskell', 13, 27),
    ('George', 'Sand', 14, NULL);