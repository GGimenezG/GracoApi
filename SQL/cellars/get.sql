CREATE PROCEDURE `cellars_get`(
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
			SELECT c.idCellars as id, c.description
			/*INTO @selectdata*/
			FROM cellars c
            WHERE c.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SELECT c.idCellars as id, c.description
			/*INTO @selectdata*/
			FROM cellars c
			WHERE c.idCellars = iId AND c.status = 'A';
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		END IF;
	ELSE 
		SET oRes = 0;
        SET oMessage = 'Invalid session token';
	END IF;
	
    SELECT oRes as success, oMessage as message;
END