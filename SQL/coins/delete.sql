CREATE PROCEDURE `coins_delete`(
	IN iId INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE vCount INT;
        
    CALL validateSession(iToken, iUser, @respuesta);
    
	SELECT @respuesta INTO vValid from dual;
    
    IF vValid = 1 THEN
		UPDATE coins
			SET
			`status` = 'I',
			`updatedAt` = NOW()
			WHERE `idCoins` = iId;
            SET oRes = 1;
			SET oMessage = 'Deleted successfully';
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END