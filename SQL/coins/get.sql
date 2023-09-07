CREATE PROCEDURE `coins_get`(
	IN iId INT,
    IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
        
    CALL validateSession(iToken, iUser, @respuesta);

	SELECT @respuesta INTO vValid from dual;
    IF vValid = 1 THEN
		IF iId = 0 THEN
			SELECT c.idCoins as id, c.name, c.description
			/*INTO @selectdata*/
			FROM coins c
            WHERE c.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SELECT c.idCoins as id, c.name, c.description
			/*INTO @selectdata*/
			FROM coins c
			WHERE c.idCoins = iId AND b.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END