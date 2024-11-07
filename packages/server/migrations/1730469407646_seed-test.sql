-- Up Migration
INSERT INTO
    test (name)
VALUES
    ('Test 1'),
    ('Test 2'),
    ('Test 3');

-- Down Migration
DELETE FROM test
WHERE
    name IN ('Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5');