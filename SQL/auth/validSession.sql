CREATE FUNCTION `validateSession` (
    iToken varchar(45),
    iUser varchar(45)
)
RETURNS INT
NOT DETERMINISTIC
READS SQL DATA
BEGIN
	DECLARE res INT;
    DECLARE vUserId INT;
    DECLARE vDate INT;
    DECLARE vDateNow INT;
    
    SET res = 0;
    
    Select se.loginAt
    into vDate
    from sessions se
    INNER JOIN users u ON u.username = iUser
    where se.idUser = u.idUsers;
    
    
    SELECT DATE_SUB(NOW(), INTERVAL '30:0' MINUTE_SECOND) 
    INTO vDateNow;
    
    IF vDate > vDateNow  THEN
		SET res =1;
	END IF;
    
	RETURN res;
END